import React, { useState } from 'react';
import {
    Modal,
    Box,
    TextField,
    TextareaAutosize,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
    Button
} from '@mui/material';
import './FormModal.css'



function FormModal({ open, handleClose, formData }) {
    const [title, setTitle] = useState(formData ? formData.title : '');
    const [description, setDescription] = useState(formData ? formData.description : '');
    const [status, setStatus] = useState(formData ? formData.status : '');

    const handleSave = () => {
        const data = { title, description, status };
        // Handle save logic here
        console.log(data);
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
            <Box className='form-modal-box' >
                <TextField
                    label="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    fullWidth
                    margin="normal"
                    variant='standard'
                    className='form-input'
                />
                <TextareaAutosize
                    minRows={4}
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className='form-textarea'
                />
                <FormControl fullWidth margin="normal">
                    <InputLabel id="status-label">Status</InputLabel>
                    <Select
                        labelId="status-label"
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                    >
                        <MenuItem value="IN_PROGRESS">In progress</MenuItem>
                        <MenuItem value="COMPLETED">Completed</MenuItem>
                        <MenuItem value="TO_DO">To do</MenuItem>
                    </Select>
                </FormControl>
                <Button variant="contained" color="primary" onClick={handleSave} style={{ marginTop: 16 }}>
                    Save
                </Button>
            </Box>
        </Modal>
    );
};

export default FormModal