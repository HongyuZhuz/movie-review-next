
import { MovieDetailSkeleton } from "@/app/ui/skeleton/movie-card-skeleton"
export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return (
        <div>
          <MovieDetailSkeleton/>
        </div>
    )
  }