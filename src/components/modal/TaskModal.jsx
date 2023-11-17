import React from "react";
import Option from "./Option";
import Backdrop from "./Backdrop";
import { getAllToDos } from "../libs/localStorage";

const TaskModal = ({ setClose, data, setEdit, setUpdated }) => {
  const handleDelete = () => {
    const allTodos = getAllToDos();

    const filteredTodos = allTodos.filter((t) => t.id !== data);

    localStorage.setItem("pending", JSON.stringify(filteredTodos));
  };

  return (
    <>
      <Backdrop onClose={setClose} />
      <div
        onClick={(e) => e.stopPropagation()}
        className="absolute top-[60px] right-4 z-50 py-4 bg rounded-md min-w-[150px] flex flex-col gap-y-2"
      >
        <Option
          title="Edit"
          onClick={() => {
            setEdit(true);
            setClose();
          }}
        />
        <Option
          title="Delete"
          onClick={() => {
            handleDelete();
            setUpdated(true);
            setClose();
          }}
        />
      </div>
    </>
  );
};

export default TaskModal;
