import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import FilterSection from "../FilterSection/FilterSection";
import TaskList from "../TaskList/TaskList";
import './TaskPage.css'
import { useEffect } from 'react';
import { login } from '../api';


function TaskPage() {
	

	return (
		<>
			<div className="main-container">
				<FilterSection />
				<TaskList />
			</div>
		</>
	);
}

export default TaskPage;
