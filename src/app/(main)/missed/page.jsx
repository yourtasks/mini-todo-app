"use client";

import { getMissing } from "@/components/libs/localStorage";
import Empty from "@/components/shared/Empty";
import Loading from "@/components/shared/Loading";
import TaskCard from "@/components/tasks/TaskCard";
import { useEffect, useState } from "react";
import { validate } from "uuid";

const Page = () => {
  const [todo, setTodo] = useState(null);

  useEffect(() => {
    const fetchData = () => {
      validate();

      setTodo(getMissing());
    };

    if (!todo) {
      fetchData();
    }
  }, [todo]);

  return (
    <div className="p-4 h-full w-full flex flex-col gap-y-4 overflow-y-auto">
      {todo ? (
        todo.length > 0 ? (
          todo.map((t) => <TaskCard key={t.id} data={t} />)
        ) : (
          <Empty />
        )
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default Page;
