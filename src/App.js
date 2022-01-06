import { useState } from "react";
import Header from "./components/Header ";
import Tasks from "./components/Tasks";
function App() {
  const [tasks, setTask] = useState([
    {
      id: 1,
      message: "Typing Practice",
      time: "Daily at 1:00pm",
      remainder: true,
    },
    {
      id: 2,
      message: "Learn Data Science",
      time: "Daily at 7:30pm",
      remainder: false,
    },

    {
      id: 3,
      message: "Badminton",
      time: "Daily 9-10pm",
      remainder: true,
    },
  ]);

  const deleteTask = (id) => {
    // console.log('delete',id)
    setTask(tasks.filter((task) => task.id !== id));
  };
  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} />
      ) : (
        "No Tasks to do"
      )}
    </div>
  );
}

export default App;
