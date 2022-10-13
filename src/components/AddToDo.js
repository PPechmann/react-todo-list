

const AddToDo = ( {handleAddTodo, handleInput, input} ) => {

    return (
        <div className="addToDo-container"> 
            <input 
                className="addToDo-input"
                type="text" 
                placeholder="Add Todo"
                onChange={handleInput}
                value={input}
                />
            <button 
                className="addToDo-button"
                onClick={handleAddTodo}
                >
                    Add Todo
            </button>
        </div>
    )
}

export default AddToDo