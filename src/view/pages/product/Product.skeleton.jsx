import React from 'react'

export const SkeletonBox = ({ className }) => (
    <div className={`animate-pulse bg-gray-300 rounded-md ${className}`} />
)

export const ImageSkeleton = () => <SkeletonBox className="w-full h-full" />

export const DescriptionSkeleton = () => (
    <div className="w-full flex flex-col gap-8rounded-2xl p-8 mx-auto">
        <SkeletonBox className="h-6 w-3/4" />
        <SkeletonBox className="h-4 w-3/4" />
        <SkeletonBox className="h-4 w-3/4" />
        <SkeletonBox className="h-4 w-3/4" />
    </div>
)

export const ActionsSkeleton = () => (
    <div className="w-full p-6 rounded-xl mt-6 space-y-4 ">
        <SkeletonBox className="w-1/3 h-10" />
        <SkeletonBox className="w-1/3 h-10" />
    </div>
)
