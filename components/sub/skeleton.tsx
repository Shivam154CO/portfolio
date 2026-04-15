"use client";

import { cn } from "@/lib/utils";

interface SkeletonProps {
  className?: string;
}

export const Skeleton = ({ className }: SkeletonProps) => {
  return (
    <div
      className={cn(
        "animate-pulse bg-white/5 rounded-xl border border-white/10",
        className
      )}
    />
  );
};

export const ProjectSkeleton = () => {
  return (
    <div className="w-full bg-[#030014]/40 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden p-8 flex flex-col lg:flex-row gap-8">
      <Skeleton className="w-full lg:w-1/2 aspect-video rounded-2xl" />
      <div className="w-full lg:w-1/2 space-y-4">
        <Skeleton className="w-24 h-6 rounded-full" />
        <Skeleton className="w-3/4 h-10 rounded-lg" />
        <div className="space-y-2">
          <Skeleton className="w-full h-4" />
          <Skeleton className="w-full h-4" />
          <Skeleton className="w-2/3 h-4" />
        </div>
        <div className="flex gap-2 pt-4">
          <Skeleton className="w-16 h-8 rounded-md" />
          <Skeleton className="w-16 h-8 rounded-md" />
          <Skeleton className="w-16 h-8 rounded-md" />
        </div>
        <div className="flex gap-4 pt-6">
          <Skeleton className="flex-1 h-12 rounded-xl" />
          <Skeleton className="w-32 h-12 rounded-xl" />
        </div>
      </div>
    </div>
  );
};

export const CertificateSkeleton = () => {
    return (
        <div className="w-full bg-white/5 rounded-2xl border border-white/10 p-6 flex flex-col gap-4">
            <Skeleton className="w-full aspect-[16/10] rounded-xl" />
            <div className="space-y-3">
                <Skeleton className="w-3/4 h-8" />
                <Skeleton className="w-1/2 h-4" />
                <div className="grid grid-cols-2 gap-3">
                    <Skeleton className="h-14 rounded-xl" />
                    <Skeleton className="h-14 rounded-xl" />
                </div>
            </div>
        </div>
    );
};
