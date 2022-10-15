import { FaTimesCircle } from 'react-icons/fa'


const ToDo = ( { item, toggleDone, deleteItem } ) => {




    return (
        <div className={`toDo-container ${item.isDone ? "done-bg" : null}`} id={item.id} key={item.id}>
            <h2 className={`toDo-text ${item.isDone ? 'done' : null}`}>{item.text}</h2>
            <div className='toDo-buttonContainer'>
                <button onClick={() => toggleDone(item.id)} className={`toDo-button ${item.isDone ? "button-done" : null}`}>{item.isDone ? "Unmark" : "Mark as done"}</button>
                <FaTimesCircle onClick={() => deleteItem(item.id)} className="delete-button" color={`${item.isDone ? "#fff" : "#081f37"}`}/>
            </div>
        </div>
    )
}

export default ToDo