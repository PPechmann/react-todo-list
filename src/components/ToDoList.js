import ToDo from "./ToDo"

const ToDoList = ({ list, toggleDone, deleteItem } ) => {
    
    return (
    <div className="toDoList-container">
        {list.map((item => {
          return (
            <ToDo 
                item={item}
                toggleDone={toggleDone}
                deleteItem={deleteItem}
            />
                )
        }))}
    </div>
    )
}

export default ToDoList