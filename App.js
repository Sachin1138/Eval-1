import React from "react";
import { AddTask } from "./components/AddTask";
import Counter from "./components/Counter/Counter";
import TaskApp from "./components/TaskApp";

function App() {
  return (
    <div>
      <AddTask />
      <Counter />
      <TaskApp />
    </div>
  );
}

export default App;
