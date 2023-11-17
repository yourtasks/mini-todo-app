"use client";
import { BsThreeDotsVertical } from "react-icons/bs";
import IconButton from "../shared/IconButton";
import moment from "moment/moment";
import TaskModal from "../modal/TaskModal";
import { useState } from "react";
import Content from "./Content";
import EditContent from "./EditContent";

const TaskCard = ({ data, setUpdated }) => {
  const [showModal, setShowModal] = useState(null);
  const [editting, setEditting] = useState(false);

  const { todo, deadline, createdAt, id } = data;

  const timeAgo = moment(deadline).fromNow();
  const time = moment(deadline).format("DD MMM YY -  HH:MM A");

  const handleShowModal = () => {
    setShowModal(id);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="w-full flex gap-x-2 items-center">
      <div className="flex items-center justify-center">
        <div className="h-5 w-5 rounded-full border-2 border-color"></div>
      </div>
      {editting ? (
        <EditContent
          data={{ todo, id, deadline }}
          setClose={() => {
            setEditting(false);
          }}
          setUpdated={setUpdated}
        />
      ) : (
        <Content timeAgo={timeAgo} todo={todo} />
      )}
      <IconButton onClick={handleShowModal}>
        <BsThreeDotsVertical size={20} />
        {showModal && (
          <TaskModal
            setClose={handleCloseModal}
            data={showModal}
            setEdit={setEditting}
            setUpdated={setUpdated}
          />
        )}
      </IconButton>
    </div>
  );
};

export default TaskCard;
