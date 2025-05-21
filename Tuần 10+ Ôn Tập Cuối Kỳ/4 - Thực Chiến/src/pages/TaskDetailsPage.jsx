import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../hooks/UseFetch";

const TaskDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data: task, isLoading } = useFetch(
    `http://localhost:3001/tasks/${id}`
  );

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="bg-blue-100 border-2 border-blue-500 rounded-lg py-2 px-1 w-1/3 mx-auto my-12">
      {!isLoading && task && (
        <>
          <h1 className="text-blue-500 font-bold text-lg">{task.title}</h1>
          <p>Mô tả: {task.description}</p>
          <p>Trạng thái: {task.status}</p>
          <p>Thời hạn: {task.dueDate}</p>
          <div className="flex flex-row justify-between my-4 mx-4">
            <button
              onClick={() => navigate(-1)}
              className="bg-gray-500 hover:bg-gray-600 rounded-lg w-1/3 text-center py-2 text-white"
            >
              Quay về
            </button>
            <button
              onClick={() => navigate(`/tasks/edit/${task.id}`)}
              className="bg-orange-500 hover:bg-orange-600 rounded-lg w-1/3 text-center py-2 text-white"
            >
              Chỉnh sửa
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default TaskDetailsPage;
