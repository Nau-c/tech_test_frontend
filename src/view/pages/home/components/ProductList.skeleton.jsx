export const ProductItemSkeleton = () => (
    <div className="w-full max-w-xs h-72 bg-white border border-gray-200 rounded-lg shadow animate-pulse">
        <div className="w-full h-40 bg-gray-300 rounded-t-md" />
        <div className="p-4 space-y-2">
            <div className="h-5 bg-gray-300 rounded w-3/4" />
            <div className="h-4 bg-gray-300 rounded w-1/2" />
        </div>
    </div>
)