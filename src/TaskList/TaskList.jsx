import React from 'react'
import Task from '../Task/Task'
import './TaskList.css'

function TaskList() {
    let t = [1 , 2, 3, 4, 5]
    return (
        <div className='task-list'>
            {
                t.map(() => {
                    return <Task/>
                })
            }
        </div>
  )
}

export default TaskList