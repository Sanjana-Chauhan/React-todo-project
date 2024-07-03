import styles from './TodoInput.module.css';
function TodoInput(props) {
  return (
    <>
      <div className={`mb-3 ${styles.inputDiv}`}>

        <button className={`btn btn-primary ${styles.addBtn}`} type="button" id="todo-add-btn"
          onClick={(event)=>props.handleAddBtn(event)} > Add</button>

        <input type="text"  className={`form-control ${styles.inputTodo}`}  id="todo-input-box"
          placeholder="Enter new Task here"  onKeyDown={props.handleKeyDown}/>
          
      </div>
    </>
  );
}
export default TodoInput;
