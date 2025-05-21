import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useTask from "../hooks/useTask";

const TaskForm = () => {
  const { createTask } = useTask();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    description: "",
    status: "",
    dueDate: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    createTask(form);
    navigate("/tasks");
  };

  return (
    <div className="w-1/3 mx-auto my-8 border-2 p-4 rounded-lg space-y-4">
      <h1 className="text-xl font-bold text-blue-500 text-center">
        Thêm Công Việc
      </h1>
      <div>
        <label htmlFor="">Tiêu đề</label>
        <input
          name="title"
          onChange={handleOnChange}
          type="text"
          className="w-full border border-gray-400 rounded-lg"
        />
      </div>
      <div>
        <label htmlFor="">Nội dung</label>
        <input
          name="description"
          onChange={handleOnChange}
          type="text"
          className="w-full border border-gray-400 rounded-lg"
        />
      </div>
      <div>
        <label htmlFor="">Trạng thái</label>
        <input
          name="status"
          onChange={handleOnChange}
          type="text"
          className="w-full border border-gray-400 rounded-lg"
        />
      </div>
      <div>
        <label htmlFor="">Thời hạn</label>
        <input
          name="dueDate"
          onChange={handleOnChange}
          type="text"
          className="w-full border border-gray-400 rounded-lg"
        />
      </div>
      <button
        onClick={onSubmit}
        className="bg-blue-500 hover:bg-blue-600 rounded-lg w-full text-center py-2 text-white"
      >
        Thêm
      </button>
    </div>
  );
};

export default TaskForm;
