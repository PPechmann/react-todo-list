import ToDo from "./ToDo"

const ToDoList = ({ list, toggleDone, deleteItem, clearAll } ) => {
    
    return (
    <div className="toDoList-container">
        {list.length > 0 ? list.map((item => {
          return ( 
                <ToDo 
                    item={item}
                    toggleDone={toggleDone}
                    deleteItem={deleteItem}
                    key={item.id}
                />
                )
        })) : <p className="busy">Get busy!</p>}
        {list.length > 0 ? <button onClick={clearAll} className="toDo-clearButton">Clear</button> : null}
    </div>
    )
}

export default ToDoList


