import create from "zustand";
import { persist } from "zustand/middleware";

export const useStarStore = create(
  persist(
    (set) => ({
      stars: 0,
      increasePopulation: () => set((state) => ({ stars: state.stars + 1 })),
      decreasePopulation: () => set((state) => ({ stars: state.stars - 1 })),
    }),
    {
      name: "star-storage",
    }
  )
);