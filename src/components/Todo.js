import React from 'react'
import './Todo.css'



const Todo = props => {
    return (
        <div
        onClick={() => props.toggleTasks(props.task.id)}
        className={`task${props.task.completed ? " completed" : ""}`}
        >
            <p>{props.task.task}</p>
        </div>
    )
}

export default Todo