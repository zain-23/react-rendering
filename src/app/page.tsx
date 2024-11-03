"use client";
import Todos from "@/components/todos";
import { useCallback, useMemo, useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState(["todo 1", "todo 2"]);
  const Calculation = useMemo(() => expensiveFunction(count), [count]);

  const increment = () => {
    setCount((c) => c + 1);
  };

  const addTodos = useCallback(() => {
    setTodos((prev) => [...prev, `New Todos ${todos.length + 1}`]);
  }, [todos]);
  return (
    <>
      <Todos todos={todos} addTodos={addTodos} />
      <div className="flex flex-col items-center mt-10">
        <p className="text-xl">Count: {count}</p>
        <button
          className="bg-white px-4 py-2 text-black rounded-md"
          onClick={increment}
        >
          +
        </button>
      </div>
      <h2 className="text-3xl">Expensive Calculation</h2>
      <p className="text-lg font-bold">{Calculation}</p>
    </>
  );
}

const expensiveFunction = (num: number) => {
  console.log("Calculating");
  for (let i = 0; i < 1000000000; i++) {
    num += 1;
  }
  return num;
};
