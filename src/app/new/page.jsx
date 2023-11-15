"use client";
import { createToDo, getAllToDos } from "@/components/libs/localStorage";
import Link from "next/link";
import { useState } from "react";
import { MdOutlineKeyboardBackspace } from "react-icons/md";

const Page = () => {
  const [formdata, setFormdata] = useState({
    todo: "",
    deadline: "",
    createdAt: new Date(),
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormdata((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    createToDo(formdata);
  };

  return (
    <div className="w-full h-screen flex flex-col gap-y-10 items-center justify-center">
      <h1 className="text-2xl font-semibold opacity-80">Add New ToDo</h1>
      <form
        onSubmit={handleSubmit}
        className="w-[80%] md:max-w-[500px] flex flex-col gap-y-4"
      >
        <input
          type="text"
          name="todo"
          className="input-field"
          placeholder="What to do?"
          value={formdata.todo}
          onChange={handleChange}
        />
        <input
          type="datetime-local"
          name="deadline"
          className="input-field"
          value={formdata.deadline}
          onChange={handleChange}
        />
        <button className="button capitalize">submit</button>
      </form>
      <Link
        href={`/`}
        className="pl-4 pr-6 py-4 flex items-center gap-x-4 border-2 border-color rounded-full"
      >
        <div>
          <MdOutlineKeyboardBackspace size={30} />
        </div>
        <p className="opacity-80 font-semibold">Back to Home</p>
      </Link>
    </div>
  );
};

export default Page;
