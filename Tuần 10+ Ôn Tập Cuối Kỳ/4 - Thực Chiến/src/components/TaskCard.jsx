import React from "react";

import { useNavigate } from "react-router-dom";
import useTask from "../hooks/useTask";

const TaskCard = ({ task }) => {
  const { removeTask } = useTask();
  const navigate = useNavigate();

  return (
    <div className="bg-blue-100 border-2 border-blue-500 rounded-lg py-2 px-1">
      <h1 className="text-blue-500 font-bold text-lg">{task.title}</h1>
      <p>Trạng thái: {task.status}</p>
      <p>Thời hạn: {task.dueDate}</p>
      <div className="flex flex-row justify-between my-4 mx-4">
        <button
          onClick={() => navigate(`/tasks/${task.id}`)}
          className="bg-blue-500 hover:bg-blue-600 rounded-lg w-1/3 text-center py-2 text-white"
        >
          Xem chi tiết
        </button>
        <button
          onClick={() => removeTask(task.id)}
          className="bg-red-500 hover:bg-red-600 rounded-lg w-1/3 text-center py-2 text-white"
        >
          Xóa
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
