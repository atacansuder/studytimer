import styles from "./AddTaskDialog.module.css";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import { useState } from "react";

class Task {
  constructor() {
    this.id = null;
    this.name = "";
    this.estimated_pomodoros = 1;
  }
}

function AddTaskDialog({ cancel, addTask }) {
  const [task, setTask] = useState(new Task());

  const changePomodoroValue = (mode) => {
    if (mode === "increase")
      setTask({ ...task, estimated_pomodoros: task.estimated_pomodoros + 1 });
    else if (task.estimated_pomodoros > 1)
      setTask({ ...task, estimated_pomodoros: task.estimated_pomodoros - 1 });
  };

  const confirmTask = () => {
    if (task.name === "") return;
    addTask(task);
    setTask(new Task());
  };

  return (
    <div className={styles.container}>
      <input
        type="text"
        name="task_name"
        id="task_name"
        placeholder="Enter a task name..."
        value={task.name}
        className={styles.input_name}
        onChange={(e) => setTask({ ...task, name: e.target.value })}
      />
      <div className={styles.pomodoro_count_container}>
        Est. pomodoros to complete
        <div className={styles.pomodoro_count_subcontainer}>
          <input
            type="number"
            name="task_pomodoro_count"
            id="task_pomodoro_count"
            min="0"
            step="1"
            value={task.estimated_pomodoros}
            onChange={(e) => {
              if (e.target.value > 0)
                setTask({ ...task, estimated_pomodoros: e.target.value });
            }}
            className={styles.pomodoro_count_input}
          />
          <div className={styles.pomodoro_button_container}>
            <button
              className={styles.change_number_button}
              id="increase_est_button"
              onClick={(e) => changePomodoroValue("increase")}
            >
              <MdKeyboardArrowUp size={24} />
            </button>
            <button
              className={styles.change_number_button}
              id="decrease_est_button"
              onClick={(e) => changePomodoroValue("decrease")}
            >
              <MdKeyboardArrowDown size={24} />
            </button>
          </div>
        </div>
      </div>
      <div className={styles.actions_container}>
        <button onClick={(e) => cancel(false)} className={styles.cancel_button}>
          Cancel
        </button>
        <button
          onClick={confirmTask}
          disabled={task.name === ""}
          id="add_task_button"
          className={styles.add_button}
        >
          Add task
        </button>
      </div>
    </div>
  );
}

export default AddTaskDialog;
