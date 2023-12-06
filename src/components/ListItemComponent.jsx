import { useContext } from "react";
import { TasksContext } from "../context/TasksContext.jsx";

export const ListItemComponent = ({ task: { task = "", isComplete, id } }) => {
  const { dispatch } = useContext(TasksContext);
  const handelComplete = (id) => {
    dispatch({ type: "SET_IS_COMPLETE", payload: id });
  };
  const handelDelete = (id) => {
    dispatch({ type: "DELETE_TASK", payload: id });
  };

  const handelUpdate = (task, id) => {
    dispatch({ type: "SET_IS_UPDATING" });
    dispatch({ type: "SET_INPUT_VALUE", payload: task });
    dispatch({ type: "SET_ITEM_TO_BE_UPDATED_ID", payload: id });
  };

  return (
    <li
      className={
        "list__item " +
        (isComplete ? (task.length >= 28 ? "line-through" : "completed") : null)
      }
    >
      <div className="list__item-container">
        <span className="list__item-text">&nbsp;{task}&nbsp;</span>
        <div className="list__item-button">
          <button
            onClick={() => handelComplete(id)}
            className="btn btn--completed"
          >
            <svg
              className="completed-icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 50 50"
            >
              <path d="M 42.875 8.625 C 42.84375 8.632813 42.8125 8.644531 42.78125 8.65625 C 42.519531 8.722656 42.292969 8.890625 42.15625 9.125 L 21.71875 40.8125 L 7.65625 28.125 C 7.410156 27.8125 7 27.675781 6.613281 27.777344 C 6.226563 27.878906 5.941406 28.203125 5.882813 28.597656 C 5.824219 28.992188 6.003906 29.382813 6.34375 29.59375 L 21.25 43.09375 C 21.46875 43.285156 21.761719 43.371094 22.050781 43.328125 C 22.339844 43.285156 22.59375 43.121094 22.75 42.875 L 43.84375 10.1875 C 44.074219 9.859375 44.085938 9.425781 43.875 9.085938 C 43.664063 8.746094 43.269531 8.566406 42.875 8.625 Z" />
            </svg>
          </button>
          <button
            onClick={() => handelUpdate(task, id)}
            className="btn btn--edit"
          >
            <svg
              className="edit-icon"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0 0 24 24"
            >
              <path d="M 19.171875 2 C 18.448125 2 17.724375 2.275625 17.171875 2.828125 L 16 4 L 20 8 L 21.171875 6.828125 C 22.275875 5.724125 22.275875 3.933125 21.171875 2.828125 C 20.619375 2.275625 19.895625 2 19.171875 2 z M 14.5 5.5 L 3 17 L 3 21 L 7 21 L 18.5 9.5 L 14.5 5.5 z"></path>
            </svg>
          </button>
          <button onClick={() => handelDelete(id)} className="btn btn--delete">
            <svg
              className="delete-icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 50 50"
            >
              <path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z" />
            </svg>
          </button>
        </div>
      </div>
    </li>
  );
};
