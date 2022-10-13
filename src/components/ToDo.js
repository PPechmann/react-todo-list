
const ToDo = ( { text } ) => {


    const handleDone = (e) => {
        e.target.previousElementSibling.style.textDecoration = "line-through";
        e.target.parentElement.style.backgroundColor="#1e69b0";
    }

    return (
        <div className="toDo-container">
            <h2 className="toDo-text">{text}</h2>
            <button onClick={handleDone} className="toDo-button">Mark as done</button>
        </div>
    )
}

export default ToDo