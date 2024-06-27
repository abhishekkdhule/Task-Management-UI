import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import FilterSection from "../FilterSection/FilterSection";
import TaskList from "../TaskList/TaskList";
import './TaskPage.css'
import { useEffect, useState } from 'react';
import { login } from '../api';
import dayjs from 'dayjs';

function TaskPage() {
	
    const [filters, setFilters] = useState({taskStatus:['TO_DO'], date: dayjs()})
    const [edit, setEdit] = useState(false)
    const handleClose = () => setEdit(!edit)

	return (
		<>
			<div className="main-container">
                {/* <FormModal open={edit} handleClose={handleClose} formData={{taskId:taskId, title:title, description:description, status:status}}  /> */}
				<FilterSection filters={filters} setFilters={setFilters}/>
				<TaskList filters={filters} setFilters={setFilters}/>
			</div>
		</>
	);
}

export default TaskPage;
