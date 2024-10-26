document.addEventListener('DOMContentLoaded', function() {
    const taskForm = document.getElementById('task-form');
    const taskList = document.getElementById('task-list');

    taskForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const title = document.getElementById('task-title').value;
        const description = document.getElementById('task-description').value;

        // Fetch API call to post a new task
        fetch('http://127.0.0.1:8000/api/tasks/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Add-you-token!'  // Add your token here
            },
            body: JSON.stringify({
                title: title,
                description: description
            })
        })
        .then(response => response.json())
        .then(data => {
            if (data.id) {
                const li = document.createElement('li');
                li.textContent = `${data.title}: ${data.description}`;
                taskList.appendChild(li);
                taskForm.reset();
            } else {
                console.error('Error adding task:', data);
            }
        })
        .catch(error => console.error('Error:', error));
    });
});
