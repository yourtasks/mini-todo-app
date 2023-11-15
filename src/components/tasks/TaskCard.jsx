import { BsThreeDotsVertical } from "react-icons/bs";
import IconButton from "../shared/IconButton";
import moment from "moment/moment";

const TaskCard = ({ data }) => {
  const { todo, deadline, createdAt } = data;

  const timeAgo = moment(deadline).fromNow();

  return (
    <div className="w-full flex gap-x-2">
      <div className="flex items-center justify-center">
        <div className="h-5 w-5 rounded-full bg-slate-500"></div>
      </div>
      <div className={`w-full p-4 rounded-lg text border-[1px] border-color`}>
        <p className="text-sm opacity-80">{timeAgo}</p>
        <h1 className="text-lg font-medium">{todo}</h1>
      </div>
      <IconButton>
        <BsThreeDotsVertical size={20} />
      </IconButton>
    </div>
  );
};

export default TaskCard;
