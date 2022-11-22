import { useStarStore } from "../zustand/zustand";

export function Controls() {
  const increasePopulation = useStarStore((state) => state.increasePopulation);
  const decreasePopulation = useStarStore((state) => state.decreasePopulation);

  return (
    <div>
      <button onClick={increasePopulation} className='pr-5 pl-5 text-sky-500'>Up</button>
      <button onClick={decreasePopulation} className='text-sky-500'>Down</button>
    </div>
  );
}