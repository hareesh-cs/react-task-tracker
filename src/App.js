import { useState } from "react";
import Header from "./components/Header ";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTask] = useState([
    {
      id: 1,
      message: "Typing Practice",
      time: "Daily at 1:00pm",
      reminder: true,
    },
    {
      id: 2,
      message: "Learn Data Science",
      time: "Daily at 7:30pm",
      reminder: false,
    },

    {
      id: 3,
      message: "Badminton",
      time: "Daily 9-10pm",
      reminder: true,
    },
  ]);
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTask([...tasks, newTask]);
  };
  const deleteTask = (id) => {
    // console.log('delete',id)
    setTask(tasks.filter((task) => task.id !== id));
  };

  const togglereminder = (id) => {
    // console.log(id);
    setTask(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };
  return (
    <div className="container">
      <Header
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={togglereminder} />
      ) : (
        "No Tasks to do"
      )}
    </div>
  );
}

export default App;
