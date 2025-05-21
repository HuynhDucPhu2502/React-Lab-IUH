import { useDispatch, useSelector } from "react-redux";
import { addTask, deleteTask, updateTask } from "../features/taskSlice";
import { useCallback } from "react";

const useTask = () => {
  const dispatch = useDispatch();
  const { tasks, loading, error } = useSelector((state) => state.task);

  const removeTask = useCallback(
    (id) => {
      dispatch(deleteTask(id));
    },
    [dispatch]
  );

  const createTask = useCallback(
    (id) => {
      dispatch(addTask(id));
    },
    [dispatch]
  );

  const editTask = useCallback(
    (id) => {
      dispatch(updateTask(id));
    },
    [dispatch]
  );

  return { tasks, loading, error, createTask, removeTask, editTask };
};

export default useTask;
