

import Header from "./components/Header";
import { useState } from "react"
import { nanoid } from "nanoid"
import AddToDo from "./components/AddToDo";
import ToDoList from "./components/ToDoList";

function App() {

  const [input, setInput] = useState('')
  const [list, setList] = useState([])

  const handleAddTodo = (e) => {

      if(input.length === 0) {
        return
      }

      else {
        setList([...list, {id: nanoid(), isDone: false, text: input}])
        setInput('')
      }
}

  const toggleDone = (id) => {
      setList(list.map((item) => 
      item.id === id ? {...item, isDone: !item.isDone}
      :item))
  }

  const saveInput = (e) => {
    setInput(e.target.value)
  }

  const deleteItem = (id) => {
    setList(list.filter((item) => item.id !== id))
    
    }



  return (
    <div className="App">

      <Header /> 

      <AddToDo 
        handleAddTodo={handleAddTodo} 
        input={input}
        saveInput={saveInput}
        />

      <ToDoList 
        list={list}
        toggleDone={toggleDone}
        deleteItem={deleteItem}
        />

    </div>
  );
}

export default App;
