

import Header from "./components/Header";
import { useState } from "react"
import { nanoid } from "nanoid"

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



  return (
    <div className="App">

     <Header /> 

        <div className="addToDo-container"> 
            <input 
                className="addToDo-input"
                type="text" 
                placeholder="Add Todo"
                onChange={ (e) => setInput(e.target.value) }
                value={input}
                />
            <button 
                className="addToDo-button"
                onClick={handleAddTodo}
                >
                    Add Todo
            </button>
        </div>
        <div className="toDoList-container">
            {list.map((item => {
              return (
                      <div className={`toDo-container ${item.isDone ? "done-bg" : null}`} id={item.id} key={item.id}>
                        <h2 className={`toDo-text ${item.isDone ? 'done' : null}`}>{item.text}</h2>
                        <button onClick={() => toggleDone(item.id)} className={`toDo-button ${item.isDone ? "button-done" : null}`}>{item.isDone ? "Unmark" : "Mark as done"}</button>
                      </div>
                    )
            }))}
        </div>
    </div>
  );
}

export default App;
