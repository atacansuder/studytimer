import styles from "./TaskItem.module.css";
import { MdCheckCircle, MdCheckCircleOutline, MdDelete } from "react-icons/md";
import { useState } from "react";

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
