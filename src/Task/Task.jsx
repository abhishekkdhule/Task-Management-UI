import React, { useState } from 'react'
import './Task.css'
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useForm, SubmitHandler } from "react-hook-form"
import { Button, Modal } from '@mui/material';
import TextField from '@mui/material/TextField';
import { TextareaAutosize } from '@mui/base/TextareaAutosize';
import FormModal from '../FormModal/FormModal';

// https://colorhunt.co/palette/070f2b1b1a55535c919290c3
function Task() {
	const [edit, setEdit] = useState(false)
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm()

	const onSubmit = (data) => console.log(data)

	const handleClose = () => {
		setEdit(!edit)
	}

	const updateTaskDetails = () => {
		setEdit(!edit)
	}

	return (
		<div className='task'>
			{		<>
					<FormModal open={edit} handleClose={handleClose} formData={null}/>

					<div >

						<div>

							<h1>Title</h1>
							<span onClick={() => setEdit(!edit)}>edit</span>
						</div>
						<p>Description</p>
					</div>
					</>
			}

		</div>
	)
}

export default Task