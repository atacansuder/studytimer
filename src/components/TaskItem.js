import styles from "./TaskItem.module.css";
import { MdCheckCircle, MdCheckCircleOutline, MdDelete } from "react-icons/md";

// TODO: Clicking the Check Circle should end the task early if the user chooses to do so.
// Also add an option to reverse the decision incase the user clicked it accidentally.
function TaskItem({ data, pomodorosPassed, deleteTask }) {
  return (
    <div className={styles.container}>
      <div className={styles.name_container}>
        {data.completed ? (
          <MdCheckCircle
            size={28}
            color="rgb(50, 50, 50)"
            style={{ cursor: "pointer" }}
          />
        ) : (
          <MdCheckCircleOutline
            size={28}
            color="rgb(175, 175, 175)"
            style={{ cursor: "pointer" }}
          />
        )}
        <span>{data.name}</span>
      </div>
      <div className={styles.actions_container}>
        <span>{pomodorosPassed + " / " + data.estimated_pomodoros}</span>
        <MdDelete
          size={28}
          onClick={(e) => deleteTask(data.id)}
          style={{ cursor: "pointer" }}
        />
      </div>
    </div>
  );
}

export default TaskItem;
