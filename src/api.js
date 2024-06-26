export const createTask = (taskDetails) => {
    fetch(`${process.env.BASE_URL}/api/v1/tasks`,
        {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'POST',
            body: []
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

export const getTasks = (date) => {
    return fetch(`http://127.0.0.1:8000/api/v1/task`,
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