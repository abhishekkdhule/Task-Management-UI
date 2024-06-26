import React, { useState } from 'react'
import './Task.css'
import FormModal from '../FormModal/FormModal';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

// https://colorhunt.co/palette/070f2b1b1a55535c919290c3
function Task({taskId, title, description, status}) {
	const [edit, setEdit] = useState(false)

	const onSubmit = (data) => console.log(data)

	const handleClose = () => {
		setEdit(!edit)
	}

	const updateTaskDetails = () => {
		setEdit(!edit)
	}

	const deleteTask = (e) => {

	}

	return (
		<div className='task'>
			{<>
				<FormModal open={edit} handleClose={handleClose} formData={{taskId:taskId, title:title, description:description, status:status}} actionType="UPDATE" />

				<div className='m-10'>
					<div className='task-title-container'>
						<h1 className='task-title'>{title}</h1>
						<EditIcon className='icon' onClick={() => setEdit(!edit)}/>
						<DeleteIcon className='icon' onClick={deleteTask}/>
					</div>
					<p className='task-description'>{description}</p>
				</div>
			</>
			}

		</div>
	)
}

export default Task