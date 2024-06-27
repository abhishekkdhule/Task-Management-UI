import React, { useEffect, useState } from 'react'
import Task from '../Task/Task'
import './TaskList.css'
import { getTasks } from '../api'

function TaskList({filters, setFilters}) {
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        getTasks(filters)
        .then((response) => {
            if (response.status === 200)
                return response.json()
            throw Error("Internal Server Error")
        }) 
        .then((data) => {
            setTasks(() => data)
        })
        .catch(error => {
            alert(error)
        })
      
    }, [filters.date, filters.status])
    
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