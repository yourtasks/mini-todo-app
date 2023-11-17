import React from "react";

const Content = ({ timeAgo, todo }) => {
  return (
    <>
      <div className={`w-full p-4 rounded-lg text border-[1px] border-color`}>
        <p className="text-xs opacity-80 font-medium">{timeAgo}</p>
        <h1 className="font-medium">{todo}</h1>
      </div>
    </>
  );
};

export default Content;
