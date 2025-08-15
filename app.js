// 1: Select elements from input
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const smartSortBtn = document.getElementById('smartSortBtn');
// Add event listener for smart Sort Button
smartSortBtn.addEventListener('click',function(){
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    // Recompute score for each task
    tasks.forEach(t => t.score = computePriorityScore(t));
    //Sort By Score )highest first
    tasks.sort((a,b) => b.score - a.score);
    // Save sorted list back to storage
    localStorage.setItem('tasks',JSON.stringify(tasks));
    //Reload UI
    loadTasks();
});
// 2: Add event listener for button click and define add task function
addTaskBtn.addEventListener('click', function () {
    // 3: Read input value
    const taskText = taskInput.value.trim();
    
    // 4: Check if input isn't empty
    if (taskText !== '') {
        // 5: Save to localStorage
        let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        let dueDateInput = prompt("Due date (YYYY-MM-DD) or leave blank:");
        tasks.push({
            text : taskText,
            importance: 'Medium',
            dueDate : dueDateInput ? dueDateInput.trim() : null,
            createdAt : Date.now()
        });
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
    // Handle both shapes
    const isString = (typeof tasks[index] === 'string');
    const currentText = isString ? tasks[index] : (tasks[index].text || '');
    const updatedTask = prompt("Edit your task : ",currentText );

    // Check if user updated task and new input is not empty
    if (updatedTask !== null && updatedTask.trim() !== '') {
        if (isString) {
            //upgrade to object on Edit
            tasks[index] = {
                text : updatedTask.trim(),
                importance: 'Medium',
                dueDate: null,
                createdAt : Date.now()
            };
        }
        else {
            tasks[index].text = updatedTask.trim();
        }
        // Recompute score after edit
        tasks[index].score = computePriorityScore(tasks[index]);
        
        // Save the updated tasks
        localStorage.setItem('tasks',JSON.stringify(tasks));
        loadTasks();
    
    }
    
}

// 7: Function to load and display tasks
function loadTasks() {
    let tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    
    // Migrate old tasks strings into objects (once
    const migrated = tasks.map( item => {
        if (typeof item === 'string') {
            return {
                text : item , 
                importance : 'Medium', //default for now
                dueDate : null , // default value is null
                createdAt : Date.now()
            };
        } return item;
    });
    // 2: Compute a score for each task and sort high to low
    migrated.forEach(t=>t.score = computePriorityScore(t));
    migrated.sort((a,b) => b.score - a.score);

    // 3) Save back (so indices match your buttons after sorting)
    localStorage.setItem('tasks',JSON.stringify(migrated));
    // 4) Render
    const taskList = document.getElementById('tasklist');
    taskList.innerHTML = '';

    migrated.forEach((taskobj,index) => {
        const taskItem = document.createElement('div');
         // show text + (optional) quick hint of score
         const taskText = document.createElement('span');
         taskText.textContent = taskobj.text + '  ';
         const scoreBadge = document.createElement('small');
         scoreBadge.textContent = `(score :${taskobj.score})`;

         const deleteBtn = document.createElement('button');
         deleteBtn.textContent = 'Delete';
         deleteBtn.addEventListener('click',function(){
            deleteTask(index);
         });
        const editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.addEventListener('click',function(){
            editTask(index);
        });
        taskItem.appendChild(taskText);
        taskItem.appendChild(scoreBadge);
        taskItem.appendChild(editBtn);
        taskItem.appendChild(deleteBtn);
        taskList.appendChild(taskItem);
    });
}
function computePriorityScore(taskobj) {
    // 1) Normalize if we received a plain string, wrap it
    const t = (typeof taskobj === 'string')
    ? {text : taskobj , importance: 'Medium' , dueDate : null , createdAt : Date.now()}
    : taskobj;

    let score = 0;
    // 2) Importance points
    const imp = (t.importance || 'Medium').toLowerCase();
    if (imp === 'high') score += 40;
    if (imp === 'medium') score +=20;
    if (imp === 'low') score +=5;

     // 3) Deadline proximity points (if dueDate exists, format yyyy-mm-dd)
     if (t.dueDate) {
        const today = new Date();
        const due = new Date(t.dueDate);
        const msPerDay = 24 * 60 * 60 * 1000;
        const daysLeft = Math.ceil((due - today) / msPerDay);
        
        if (daysLeft <= 1) score += 50;
        if (daysLeft <= 3) score += 30;
        if (daysLeft <= 7) score += 15;

    
     }
     // Quick win bonus if duration (in minutes) is small
     if (t.duration && Number(t.duration) <= 30) score += 10;

     return score;

}

// Call loadTasks when page loads
window.onload = loadTasks;
