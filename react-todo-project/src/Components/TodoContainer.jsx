import TodoTask from "./TodoTask";
function TodoContainer(props) {
  let TodoList=props.TodoList;
 

  if(TodoList.length===0){
      return <h4>No Task in Your List</h4>
  }

  return (
    <div>
      <ul className="list-group">
       {TodoList.map((todo) => (
        <TodoTask task={todo} handleDelOnClick={props.handleDelOnClick} handleEditOnClick={props.handleEditOnClick}></TodoTask>
       ))        
       }
        
      </ul>
    </div>
  );
}
export default TodoContainer;
