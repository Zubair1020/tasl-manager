import { FormComponent } from "./components/FormComponent.jsx";
import { ListItemComponent } from "./components/ListItemComponent.jsx";
import { useContext } from "react";
import { TasksContext } from "./context/TasksContext.jsx";

function App() {
  const { state } = useContext(TasksContext);
  return (
    <div className="container">
      <div className="heading">
        <h1 className="heading__primary">Task-Manager</h1>
      </div>
      <FormComponent />
      <ul className="list">
        {state.tasks.map((task) => (
          <ListItemComponent key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
}

export default App;
