import { BsThreeDotsVertical } from "react-icons/bs";
import IconButton from "../shared/IconButton";
import moment from "moment/moment";

const TaskCard = ({ data }) => {
  const { todo, deadline, createdAt } = data;

  const timeAgo = moment(deadline).fromNow();

  return (
    <div className="w-full flex gap-x-2">
      <div className="flex items-center justify-center">
        <div className="h-5 w-5 rounded-full border-2 border-color"></div>
      </div>
      <div className="w-full flex flex-col gap-y-1">
        <div className={`w-full p-4 rounded-lg text border-[1px] border-color`}>
          <p className="text-xs opacity-80 font-medium">{timeAgo}</p>
          <h1 className="font-medium">{todo}</h1>
        </div>
      </div>
      <IconButton>
        <BsThreeDotsVertical size={20} />
      </IconButton>
    </div>
  );
};

export default TaskCard;
