import React, { useEffect, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";

import useFetch from "../hooks/UseFetch";
import useTask from "../hooks/useTask";

const TaskEditPage = () => {
  const { editTask } = useTask();
  const { id } = useParams();

  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    description: "",
    status: "",
    dueDate: "",
  });

  const { data, isLoading } = useFetch(`http://localhost:3001/tasks/${id}`);

  useEffect(() => {
    if (data) setForm(data);
  }, [data]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    editTask({ id, task: form });
    navigate("/tasks");
  };

  if (isLoading) return <p>Loading...</p>;

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
          defaultValue={form.title}
          type="text"
          className="w-full border border-gray-400 rounded-lg"
        />
      </div>
      <div>
        <label htmlFor="">Nội dung</label>
        <input
          name="description"
          onChange={handleOnChange}
          defaultValue={form.description}
          type="text"
          className="w-full border border-gray-400 rounded-lg"
        />
      </div>
      <div>
        <label htmlFor="">Trạng thái</label>
        <input
          name="status"
          onChange={handleOnChange}
          defaultValue={form.status}
          type="text"
          className="w-full border border-gray-400 rounded-lg"
        />
      </div>
      <div>
        <label htmlFor="">Thời hạn</label>
        <input
          name="dueDate"
          onChange={handleOnChange}
          defaultValue={form.dueDate}
          type="text"
          className="w-full border border-gray-400 rounded-lg"
        />
      </div>
      <button
        onClick={() => navigate(-1)}
        className="bg-gray-500 hover:bg-gray-600 rounded-lg w-full text-center py-2 text-white"
      >
        Quay về
      </button>
      <button
        onClick={onSubmit}
        className="bg-blue-500 hover:bg-blue-600 rounded-lg w-full text-center py-2 text-white"
      >
        Sửa
      </button>
    </div>
  );
};

export default TaskEditPage;
