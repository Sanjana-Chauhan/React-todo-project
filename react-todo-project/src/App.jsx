import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import TodoHeading from "./Components/TodoHeading";
import TodoInput from "./Components/TodoInput";
import TodoContainer from "./Components/TodoContainer";
import { useState } from "react";


function App() {
  let [TodoList,setTodoList]=useState([]);
  
  function handleKeyDown(event){
    
    if(event.key=== 'Enter' && event.target.value!=""){
      setTodoList([...TodoList,event.target.value]);
      event.target.value="";
    }
  }

  function onAddBtnClick(event){
    let newTask=document.querySelector("#todo-input-box").value;
    if(newTask===""){
      alert("Enter some task first");
    }
    else{
      setTodoList([...TodoList,newTask]);
      document.querySelector("#todo-input-box").value="";
    }     
  }

  function handleDelOnClick(itemToDel){
      console.log(itemToDel);
      let newTodoList=TodoList.filter(task => task!==itemToDel);
      setTodoList(newTodoList);
  }

  function handleEditOnClick(itemToEdit){
    document.querySelector("#todo-input-box").value=itemToEdit;
    let newList=TodoList.filter(task=>task !== itemToEdit);
    setTodoList([newList]);
 
  }
  return (
    <>
      <TodoHeading></TodoHeading>
      <TodoInput handleKeyDown={handleKeyDown} handleAddBtn={onAddBtnClick}></TodoInput>
      <TodoContainer TodoList={TodoList} handleDelOnClick={handleDelOnClick} handleEditOnClick={handleEditOnClick}></TodoContainer>
    </>
  );
}

export default App;
