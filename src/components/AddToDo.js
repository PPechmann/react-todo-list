

const AddToDo = ( {handleAddTodo, input, saveInput} ) => {

    
    return (
        <div className="addToDo-container"> 
            <input 
                className="addToDo-input"
                type="text" 
                placeholder="Add Todo"
                onChange={saveInput}
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