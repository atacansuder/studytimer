import { useState } from "react";
import AddTaskButton from "./AddTaskButton";
import AddTaskDialog from "./AddTaskDialog";
import TaskItem from "./TaskItem";
import styles from "./Tasks.module.css";

function Tasks() {
  const [pomodorosPassed, setPomodorosPassed] = useState(0);
  const [tasks, setTasks] = useState([]);
  const [addingTask, setAddingTask] = useState(false);

  const generateUniqueId = () => {
    return Math.floor((Date.now() / Math.random()) * 100);
  };

  const addTask = (data) => {
    data.id = generateUniqueId();
    data.completed = false;
    setTasks([...tasks, data]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className={styles.container}>
      <div className={styles.top_container}>
        <b className={styles.top_container__title}>Tasks</b>
      </div>
      {tasks.map((task) => (
        <TaskItem
          data={task}
          key={task.id}
          pomodorosPassed={pomodorosPassed}
          deleteTask={deleteTask}
        />
      ))}
      {addingTask ? (
        <AddTaskDialog cancel={setAddingTask} addTask={addTask} />
      ) : (
        <AddTaskButton action={setAddingTask} />
      )}
    </div>
  );
}

export default Tasks;
