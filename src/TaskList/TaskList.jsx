import React, { useEffect, useState } from 'react'
import Task from '../Task/Task'
import './TaskList.css'
import { getTasks } from '../api'

function TaskList() {
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        getTasks().
        then((response) => response.json())
        .then((data) => {
            setTasks(() => data)
        })
      
    }, [])
    
    return (
        <div className='task-list'>
            {
                tasks.map((task, index) => {
                    return <Task key={task.id} taskId={task.id} title={task.title} description={task.description} status={task.status}/>
                })
            }
        </div>
  )
}

export default TaskList