import styles from "./TodoTask.module.css";
function TodoTask(props) {
  let task=props.task;

  return (
    <li className={`list-group-item ${styles.todoTasks}`} >
      <input  className={`form-check-input me-2 ${styles.taskCheck} `} type="checkbox"  value=""  id={task} ></input>
      <label className={`form-check-label ${styles.taskLabel}`} for={task}>{task}</label>


  <div className={`${styles.taskControlButtonBox}`}>
      <button className={`btn btn-primary ${styles.editTaskbtn}`} type="button" onClick={()=>props.handleDelOnClick(task)}>D </button>
      <button className={`btn btn-primary ${styles.editTaskbtn}`} type="button" onClick={()=>props.handleEditOnClick(task)}>E</button>
    </div>
    </li>
  );
}
export default TodoTask;
