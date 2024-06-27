export const createTask = (taskDetails) => {
    fetch(`${process.env.BASE_URL}/api/v1/tasks`,
        {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify(taskDetails)
        }
    ).then((response) => response.json())
        .then((data) => {
            console.log(data)
        })
}

export const updateTask = (taskDetails, taskId) => {
    return fetch(`http://127.0.0.1:8000/api/v1/task/${taskId}/`,
        {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'PUT',
            body: JSON.stringify(taskDetails)
        }
    )
}

export const deleteTask = (taskId) => {
    fetch(`${process.env.BASE_URL}/api/v1/tasks`,
        {
            method: 'DELETE',
        }
    ).then((response) => response.json())
        .then((data) => {
            console.log(data)
        })
}

export const getTasks = (filters) => {
    let queryParams = `?date=${filters.date.format('DD/MM/YYYY')}`
    if (filters.taskStatus) {
        let statusStr = filters.taskStatus.reduce((con, value) => {
            con += value + ','
            return con
        }, ``)
        
        queryParams += `&status=${statusStr.substring(0,statusStr.length-1)}`
    }

    return fetch(`http://127.0.0.1:8000/api/v1/task/${queryParams}`,
        {
            method: 'GET',
            credentials: 'include'
        }
    )
}

export const login = (userData) => {
    return fetch('http://127.0.0.1:8000/api/v1/auth/login/',
        {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify(userData)
        }
    )
}