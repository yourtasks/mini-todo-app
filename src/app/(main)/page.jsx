"use client";
import { getAllToDos } from "@/components/libs/localStorage";
import AddNew from "@/components/shared/AddNew";
import TaskCard from "@/components/tasks/TaskCard";
import { useEffect, useState } from "react";
import { v4 } from "uuid";

const Page = () => {
  const [todos, setTodos] = useState(null);

  useEffect(() => {
    const fetchAndSortTodos = async () => {
      const allTodos = getAllToDos();

      allTodos.sort((a, b) => {
        const today = new Date().toUTCString();
        const diffA = Math.abs(today - a.deadline);
        const diffB = Math.abs(today - b.deadline);
        console.log(a.deadline);
        return diffB - diffA;
      });

      setTodos(allTodos);
    };

    // Only fetch and sort todos if they are not already loaded
    if (!todos) {
      fetchAndSortTodos();
    }
  }, [todos]);

  console.log(todos);

  return (
    <div className="p-4 flex flex-col gap-y-2">
      {todos ? (
        todos.length > 0 ? (
          todos.map((todo) => <TaskCard key={v4()} data={todo} />)
        ) : (
          <div>You have no upcoming task stored</div>
        )
      ) : (
        <div>Loading</div>
      )}

      <AddNew />
    </div>
  );
};

export default Page;
