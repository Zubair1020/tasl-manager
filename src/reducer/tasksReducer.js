export const tasksReducer = (
  state,
  { type, payload } = {
    type: "",
    payload: () => {},
  },
) => {
  switch (type) {
    case "SET_TASKS":
      return { ...state, tasks: [...state.tasks, payload] };
    case "SET_INPUT_VALUE":
      return { ...state, inputValue: payload };
    case "SET_IS_UPDATING":
      return { ...state, isUpdating: !state.isUpdating };
    case "SET_ITEM_TO_BE_UPDATED_ID":
      return { ...state, itTemToBeUpdatedId: payload };
    case "SET_UPDATE":
      return {
        ...state,
        tasks: state.tasks.map((task) => {
          if (task.id === state.itTemToBeUpdatedId)
            return { ...task, task: state.inputValue };
          return task;
        }),
      };
    case "DELETE_TASK":
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== payload),
      };
    case "SET_IS_COMPLETE":
      return {
        ...state,
        tasks: state.tasks.map((task) => {
          if (task.id === payload)
            return { ...task, isComplete: !task.isComplete };
          return task;
        }),
      };
    default:
      return state;
  }
};
