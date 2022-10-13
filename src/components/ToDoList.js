import ToDo from "./ToDo"

const ToDoList = ({ list, text } ) => {
    return (
    <div className="toDoList-container">
        {list.map((text) => {
           return (
            <ToDo 
            text={text}
            />
           )
        })}
    </div>
    )
}

export default ToDoList