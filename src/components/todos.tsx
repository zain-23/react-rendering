"use client";
import React from "react";

const Todos = ({
  todos,
  addTodos,
}: {
  todos: string[];

  addTodos: () => void;
}) => {
  console.log("Todos render");
  return (
    <>
      <div className="flex flex-col items-center mt-8 text-lg">
        <h2>My Todos</h2>
        {todos.map((t) => {
          return <p key={t}>{t}</p>;
        })}
      </div>
      <button
        onClick={addTodos}
        className="text-black px-4 py-2 rounded-md bg-white"
      >
        Add Todos
      </button>
    </>
  );
};

export default React.memo(Todos);
