import styles from "./AddTaskButton.module.css";
import { MdAddCircle } from "react-icons/md";

function AddTaskButton({ action }) {
  return (
    <button onClick={(e) => action(true)} className={styles.button}>
      <MdAddCircle size={28} />
      Add task
    </button>
  );
}

export default AddTaskButton;
