"use client";
import moment from "moment";
import React, { useState } from "react";
import { getAllToDos } from "../libs/localStorage";

const EditContent = ({ data, setClose, setUpdated }) => {
  const { deadline: oldDeadline, todo: oldTodo, id } = data;
  const [formdata, setFormdata] = useState({
    todo: oldTodo,
    deadline: oldDeadline,
  });

  const { todo, deadline } = formdata;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormdata((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const allTodos = getAllToDos();

    allTodos.map((t) => {
      if (t.id === id) {
        t.todo = todo;
        t.deadline = deadline;
      }
    });

    localStorage.setItem("pending", JSON.stringify(allTodos));
    setUpdated(true);
    setClose();
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className={`relative z-50 w-full flex flex-col gap-y-2 p-4 rounded-lg text border-[1px] border-color`}
      >
        <input
          type="datetime-local"
          name="deadline"
          className="input-field py-0 w-fit"
          defaultValue={deadline}
          value={deadline}
          onChange={handleChange}
        />
        <input
          type="text"
          name="todo"
          className="input-field w-full"
          value={todo}
          onChange={handleChange}
        />
        <button className="button w-fit px-6 h-fit self-end">Update</button>
      </form>
      <div
        onClick={(e) => {
          e.stopPropagation();
          setClose();
        }}
        className="fixed top-0 left-0 w-full h-full invert-bg opacity-0"
      ></div>
    </>
  );
};

export default EditContent;
