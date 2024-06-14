import React, { useState } from 'react'

function TodoList() {
    const [tasks, setTasks] = useState<string[]>([])
    const [input, setInput] = useState<string>("")
    const addTask = () => {
        if (input.length > 0) {
            setTasks([...tasks, input])
            setInput("")
        }
    }
    const deleteTask = (index: number) => {
        let newTasks = tasks.filter((task, i) => i !== index)
        setTasks(newTasks)
    }
    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {  
        setInput(e.target.value)
    }
  return (
    <>
        <div>
            <h2>Task 2</h2>
            <h2>Todo List</h2>
            <div>
                <input type="text" placeholder="Add a task"  onChange={handleInput}/>
                <button onClick={addTask}>Add</button>
            </div>
            <div>
                <ul>
                    <li>
                        <span>Task 1</span>
                        <button>Delete</button>
                    </li>
                    <li>
                        <span>Task 2</span>
                        <button>Delete</button>
                    </li>
                    <li>
                        <span>Task 3</span>
                        <button>Delete</button>
                    </li>
                </ul>
            </div>
        </div>
    </>
  )
}

export default TodoList

