import { useContext } from "react";
import { TasksContext } from "../context/TasksContext.jsx";

export const FormComponent = () => {
  const { state, dispatch } = useContext(TasksContext);
  const handelSubmit = (e) => {
    e.preventDefault();
    const task = { task: state.inputValue, id: Date.now(), isComplete: false };
    dispatch({ type: "SET_TASKS", payload: task });
    dispatch({ type: "SET_INPUT_VALUE", payload: "" });
  };
  const handelUpdate = (e) => {
    e.preventDefault();
    dispatch({ type: "SET_UPDATE" });
    dispatch({ type: "SET_INPUT_VALUE", payload: "" });
    dispatch({ type: "SET_ITEM_TO_BE_UPDATED_ID", payload: 0 });
    dispatch({ type: "SET_IS_UPDATING" });
  };
  const handelChange = (e) => {
    dispatch({ type: "SET_INPUT_VALUE", payload: e.target.value });
  };
  return (
    <form
      className="form"
      onSubmit={state.isUpdating ? handelUpdate : handelSubmit}
    >
      <input
        value={state.inputValue}
        onChange={handelChange}
        type="text"
        className="form__input"
      />
      <button type="submit" className="form__button">
        <span className="form__button-text">
          {state.isUpdating ? "Update task" : "Add Task"}
        </span>
      </button>
    </form>
  );
};
