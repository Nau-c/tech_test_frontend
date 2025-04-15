import { renderHook, waitFor } from '@testing-library/react';
import { useCachedFetch } from './useCachedFetch';

const mockResponse = { data: 'test data' };

const localStorageMock = (() => {
    let store = {};
    return {
        getItem: jest.fn((key) => store[key] || null),
        setItem: jest.fn((key, value) => {
            store[key] = value;
        }),
        removeItem: jest.fn((key) => {
            delete store[key];
        }),
        clear: () => (store = {}),
    };
})();

Object.defineProperty(window, 'localStorage', {
    value: localStorageMock,
});

describe('useCachedFetch', () => {
    beforeEach(() => {
        jest.clearAllMocks();
        localStorage.clear();
    });

    it('fetches data and stores it in cache', async () => {
        const mockApiFunction = jest.fn(() => Promise.resolve(mockResponse));

        const { result } = renderHook(() =>
            useCachedFetch('testType', mockApiFunction)
        );

        await waitFor(() => expect(result.current.loading).toBe(false));

        expect(result.current.data).toEqual(mockResponse);
        expect(mockApiFunction).toHaveBeenCalledTimes(1);
        expect(localStorage.setItem).toHaveBeenCalled();
    });

    it('uses cache if data is not expired', async () => {
        localStorage.getItem.mockImplementation(() =>
            JSON.stringify({
                timestamp: Date.now(),
                data: mockResponse,
            })
        );

        const mockApiFunction = jest.fn(); // no debe llamarse
        const { result } = renderHook(() =>
            useCachedFetch('testType', mockApiFunction)
        );

        await waitFor(() => expect(result.current.loading).toBe(false));

        expect(result.current.data).toEqual(mockResponse);
        expect(mockApiFunction).not.toHaveBeenCalled();
    });
});
