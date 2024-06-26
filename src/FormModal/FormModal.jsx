import React, { useState } from 'react';
import {
    Modal,
    Box,
} from '@mui/material';
import './FormModal.css'
import { updateTask } from '../api';



function FormModal({ open, handleClose, formData, actionType }) {
    const [title, setTitle] = useState(formData ? formData.title : '');
    const [description, setDescription] = useState(formData ? formData.description : '');
    const [status, setStatus] = useState(formData ? formData.status : '');

    const handleUpdate = () => {
        const data = {
            title: title,
            description: description,
            status: status
        };
        updateTask(data, formData.taskId)
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
        })
        handleClose();
    };

    return (
        <Modal
            className='form-modal-main'
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
        >
            <Box className='form-modal-box'>
                <label htmlFor='task-title'>Task Title</label>
                <input id="task-title" type="text" value={title} onChange={(e)=>setTitle(e.target.value)}/>
                <label htmlFor='task-description'>Task Description</label>
                <textarea id="task-description" value={description} onChange={(e)=>setDescription(e.target.value)} />
                
                <label htmlFor='task-status'>Task Status</label>
                <select id="task-status" onSelect={(e) => setStatus(e.target.value)}>
                    <option value="TO_DO">To Do</option>
                    <option value="IN_PROGRESS">In Progress</option>
                    <option value="COMPLETED">Completed</option>
                </select>
                {
                    actionType === "UPDATE" ? 
                    <button onClick={handleUpdate}>Update</button> :
                    <button>Create</button>
                }
                
            </Box>
        </Modal>
    );
};

export default FormModal