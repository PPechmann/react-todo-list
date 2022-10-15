import ToDo from "./ToDo"

const ToDoList = ({ list } ) => {
    
    return (
    <div className="toDoList-container">
        {list.map((item) => {
           return (
            <ToDo 
            list={list}
            />
           )
        })}
    </div>
    )
}

export default ToDoList