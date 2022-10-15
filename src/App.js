

import Header from "./components/Header";
import { useEffect, useState } from "react"
import { nanoid } from "nanoid"
import AddToDo from "./components/AddToDo";
import ToDoList from "./components/ToDoList";

function App() {

  const [input, setInput] = useState('')
  const [list, setList] = useState([])

   useEffect(() => {
    const listData = localStorage.getItem('to-do-list-items')
    if(listData !== 0){
      setList(JSON.parse(listData))
    }
  }, [])
 
  useEffect(() => {
    localStorage.setItem('to-do-list-items', JSON.stringify(list))
  }, [list])

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
      console.log(list.leng)
  }

  const saveInput = (e) => {
    setInput(e.target.value)
  }

  const deleteItem = (id) => {
    setList(list.filter((item) => item.id !== id))
  }

  const clearAll = () => {
    
    if (window.confirm("Are you sure you want to permanently delete all items?")) {
      setList([])
    }
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
        clearAll={clearAll}
        />

    </div>
  );
}

export default App;
