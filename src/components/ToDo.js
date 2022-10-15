
const ToDo = ( { list } ) => {


    const handleDone = (e) => {
        e.target.previousElementSibling.style.textDecoration = "line-through";
        e.target.previousElementSibling.style.color = "black";
        e.target.parentElement.style.backgroundColor="#1e69b0";
        e.target.style.backgroundColor = "#5fc9f3"
        e.target.style.color = "black"
        e.target.innerText = "Unmark"
    }


    return (
        <div className="toDo-container" id={list.id}>
            <h2 className="toDo-text">{list.text}</h2>
            <button onClick={handleDone} className="toDo-button">Mark as done</button>
        </div>
    )
}

export default ToDo