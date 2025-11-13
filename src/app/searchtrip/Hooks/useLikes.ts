// src/hooks/useLikes.ts
import { useState, useCallback } from "react";

export default function useLikes(initial: number[] = []) {
  const [likedTrips, setLikedTrips] = useState<number[]>(initial);

  const toggleLike = useCallback((id: number) => {
    setLikedTrips((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  }, []);

  const isLiked = useCallback((id: number) => likedTrips.includes(id), [likedTrips]);

  return { likedTrips, toggleLike, isLiked };
}
