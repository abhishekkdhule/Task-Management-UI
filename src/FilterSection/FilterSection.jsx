import React from 'react'
import './FilterSection.css'
import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const STATUS_OPTIONS = [
    { label: "To do", id: "TO_DO" },
    { label: "In Progress", id: "IN_PROGRESS" },
    { label: "Completed", id: "COMPLETED" },

]

const OPTIONS = ["To do", "In Progress", "Completed"]

function FilterSection({filters, setFilters}) {
    return (
        <div className='filter-section-main'>
            <div>
                <Autocomplete
                    multiple
                    id="tags-standard"
                    options={[]}
                    getOptionLabel={(option) => option.title}
                    // defaultValue={[top100Films[13]]}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            variant="standard"
                            label="Task Status"
                            placeholder="Status"
                        />
                    )}
                />
            </div>
            <div>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker value={filters.date} onChange={(newDate) => setFilters({...filters, date: newDate})}/>
                </LocalizationProvider>
            </div>
  
                <button>Create Task</button>
   
        </div>
    )
}

export default FilterSection