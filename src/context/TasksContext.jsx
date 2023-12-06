import { createContext, useEffect, useReducer } from "react";
import { tasksReducer } from "../reducer/tasksReducer.js";

export const TasksContext = createContext({
  state: {},
  dispatch: () => {},
});

const INITIAL_TASKS = {
  tasks: [],
  inputValue: "",
  itTemToBeUpdatedId: 0,
  isUpdating: false,
};
export const TasksContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    tasksReducer,
    JSON.parse(localStorage.getItem("state")) || INITIAL_TASKS,
  );
  useEffect(
    () => localStorage.setItem("state", JSON.stringify(state)),
    [state],
  );
  const value = { state, dispatch };
  return (
    <TasksContext.Provider value={value}>{children}</TasksContext.Provider>
  );
};
