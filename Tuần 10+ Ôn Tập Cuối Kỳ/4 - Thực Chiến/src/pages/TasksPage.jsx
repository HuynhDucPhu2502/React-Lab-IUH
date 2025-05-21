import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchTasks } from "../features/taskSlice";
import TaskCard from "../components/TaskCard";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import useTask from "../hooks/useTask";

const TasksPage = () => {
  const { tasks, isLoading } = useTask();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  const navigate = useNavigate();
  const location = useLocation();
  const handlePathing = () => {
    if (location.pathname === "/tasks") navigate("/tasks/add");
    else navigate("/tasks");
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="px-4 my-4">
      <div className="flex flex-row justify-between items-center">
        <h1 className="text-blue-500 font-bold text-xl my-4">
          Danh sách công việc
        </h1>
        <button
          onClick={handlePathing}
          className="bg-cyan-500 hover:bg-cyan-600 px-2 py-1 text-white rounded-lg"
        >
          Thêm công việc
        </button>
      </div>

      <div>
        <Outlet />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 ">
        {!isLoading &&
          tasks &&
          tasks.map((x) => <TaskCard task={x} key={x.id} />)}
      </div>
    </div>
  );
};

export default TasksPage;
