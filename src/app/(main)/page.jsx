"use client";
import { sortData, validateTodo } from "@/components/libs/functions";
import { getAllToDos } from "@/components/libs/localStorage";
import AddNew from "@/components/shared/AddNew";
import TaskCard from "@/components/tasks/TaskCard";
import moment from "moment";
import { useEffect, useState } from "react";
import { v4 } from "uuid";

const Page = () => {
  const [todos, setTodos] = useState(null);
  const [updated, setUpdated] = useState(false);

  useEffect(() => {
    const fetchAndSortTodos = () => {
      validateTodo();
      const allTodos = sortData(getAllToDos());

      setTodos(allTodos);
    };

    // Only fetch and sort todos if they are not already loaded
    if (!todos || updated) {
      fetchAndSortTodos();
      setUpdated(false);
    }
  }, [todos, updated]);

  return (
    <div className="p-4 flex flex-col gap-y-2">
      {todos ? (
        todos.length > 0 ? (
          todos.map((todo) => (
            <TaskCard key={v4()} data={todo} setUpdated={setUpdated} />
          ))
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
