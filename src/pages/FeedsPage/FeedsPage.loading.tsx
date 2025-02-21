import { Skeleton } from '@heroui/react';

import type { FC } from 'react';

const FeedsLoadingSkeleton: FC = () => {
  return (
    <div className="max-w-7xl mx-auto py-6 px-4">
      {/* Search & Filters Skeleton */}
      <div className="mb-6">
        <Skeleton className="h-12 w-full rounded-lg" />
      </div>

      {/* Featured News Slider Skeleton */}
      <div className="mb-6">
        <Skeleton className="h-48 w-full rounded-lg" />
      </div>

      {/* Articles Grid Skeleton */}
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {[...Array(6)].map((_, index) => (
          <div key={index} className="p-4 bg-default-400/20 dark:bg-default-500/20 rounded-lg shadow-md">
            <Skeleton className="h-40 w-full rounded-lg mb-4" />
            <Skeleton className="h-5 w-3/4 rounded-lg mb-2" />
            <Skeleton className="h-4 w-5/6 rounded-lg mb-2" />
            <Skeleton className="h-4 w-2/3 rounded-lg" />
          </div>
        ))}
      </div>

      {/* Pagination Skeleton */}
      <div className="flex justify-center mt-8">
        <Skeleton className="h-10 w-40 rounded-lg" />
      </div>
    </div>
  );
};

export default FeedsLoadingSkeleton;
