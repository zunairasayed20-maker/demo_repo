const InputBox = document.getElementById('taskInput');
const TaskList = document.getElementById('taskList'); 
function AddTask() {
    if (InputBox.value === '') {
        alert('Please enter a task!');
    } else {
        let li = document.createElement('li');
        li.innerHTML = InputBox.value;
        TaskList.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span);
    }
    inputBox.value = '';
    saveTasks();
}  

TaskList.addEventListener('click', function(e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
        saveTasks()
    }
    else if (e.target.tagName === 'SPAN') {     
        e.target.parentElement.remove();
        saveTasks();
    }   
}, false); 

function saveTasks() {
    localStorage.setItem('data', TaskList.innerHTML);
}

function showTasks() {
    TaskList.innerHTML = localStorage.getItem('data');
}
showTasks();