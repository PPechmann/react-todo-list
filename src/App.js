import AddToDo from "./components/AddToDo";
import ToDoList from "./components/ToDoList";
import Header from "./components/Header";
import { useState } from "react"

function App() {

  const [input, setInput] = useState('')
  const [list, setList] = useState([])


  const handleInput = (e) => {
      setInput(e.target.value)
  }

  const handleAddTodo = () => {
      setList(prevList => prevList = [ ...prevList, input])
      setInput('')
  }

  return (
    <div className="App">
     <Header /> 
     <AddToDo 
      handleInput={handleInput}
      handleAddTodo={handleAddTodo}
      input={input}
     />
     <ToDoList 
      list={list}
      text={list}
     />
    </div>
  );
}

export default App;
