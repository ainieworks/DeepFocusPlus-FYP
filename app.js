// 1: Select elements from input
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');

// 2: Add event listener for button click
addTaskBtn.addEventListener('click', function () {
    // 3: Read input value
    const taskText = taskInput.value.trim();
    
    // 4: Check if input isn't empty
    if (taskText !== '') {
        // 5: Save to localStorage
        let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.push(taskText);
        localStorage.setItem('tasks', JSON.stringify(tasks));

        // 6: Clear input field
        taskInput.value = '';

        // Reload the task list to show new task
        loadTasks();
    } else {
        alert('Please enter a task!');
    }
});
// Function to delete task
function deleteTask(index) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.splice(index,1); //Removes 1 item at the given index
    localStorage.setItem('tasks',JSON.stringify(tasks));
    loadTasks()    // Refresh the tasks by calling load tasks function
}
// Function to edit task
function editTask(index) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    // Get Current value of the task
    let oldTaskValue = tasks[index];

    // Ask user for new task text that he wants to put to replace the old one
    let updatedTask = prompt("Edit your task : ", oldTaskValue);

    // Check if user updated task and new input is not empty
    if (updatedTask !== null && updatedTask.trim() !== '') {
        tasks[index] = updatedTask.trim()  //update the task text
        taskText = updatedTask.trim();

        // Save the updated tasks
        localStorage.setItem('tasks',JSON.stringify(tasks));
        loadTasks()
    
    }
    
}

// 7: Function to load and display tasks
function loadTasks() {
    let tasks = localStorage.getItem('tasks');
    if (!tasks) return; // No saved tasks

    tasks = JSON.parse(tasks);

    const taskList = document.getElementById('tasklist');
    taskList.innerHTML = ''; // Clear current list

    tasks.forEach((task, index) => {
        const taskItem = document.createElement('div');

        // Create span for task text
        const taskText = document.createElement('span');
        taskText.textContent = task;

        // Create delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', function () {
            deleteTask(index);
        });

        // Create the Edit button
        const editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.addEventListener('click', function (){
            editTask(index);
        })

        // Add text and button to taskItem
        taskItem.appendChild(taskText);
        taskItem.appendChild(deleteBtn);
        taskItem.appendChild(editBtn);

        // Add taskItem to the list
        taskList.appendChild(taskItem);
    });
}

// Call loadTasks when page loads
window.onload = loadTasks;
