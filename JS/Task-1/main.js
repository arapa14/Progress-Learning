let input = document.querySelector('.entered-list');
let addBtn = document.querySelector('.add-list');
let tasks = document.querySelector('.tasks');

// add button disable if input is empty
input.addEventListener('keyup', () => {
    if (input.value.trim() !== "") {
        addBtn.classList.add('active');
    } else {
        addBtn.classList.remove('active');
    }
});

// add new item to list
addBtn.addEventListener('click', () => {
    addTask();
});

// detect Enter key press to add task
input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' && input.value.trim() !== "") {
        addTask();
    }
});

// Function to add task
function addTask() {
    if (input.value.trim() !== "") {
        let newItem = document.createElement('div');
        newItem.classList.add('item');
        newItem.innerHTML = `
        <p> ${input.value} </p>
        <div class="item-btn">
            <i class="fa-solid fa-pen-to-square"></i>
            <i class="fa-solid fa-xmark"></i>
        </div>
        `;
        tasks.appendChild(newItem);
        input.value = "";
        saveTasksToLocalStorage();
    } else {
        alert("Please enter any task");
    }
}

// delete item from list
tasks.addEventListener('click', (event) => {
    if (event.target.classList.contains('fa-xmark')) {
        event.target.parentElement.parentElement.remove();
        saveTasksToLocalStorage();
    }

    // mark item as completed
    if (event.target.classList.contains('fa-pen-to-square')) {
        event.target.parentElement.parentElement.classList.toggle('completed');
        saveTasksToLocalStorage();
    }
});

// Save tasks to local storage
function saveTasksToLocalStorage() {
    let tasksArray = [];
    document.querySelectorAll('.item').forEach(task => {
        tasksArray.push({
            content: task.querySelector('p').textContent,
            completed: task.classList.contains('completed')
        });
    });
    localStorage.setItem('tasks', JSON.stringify(tasksArray));
}

// Load tasks from local storage on page load
function loadTasksFromLocalStorage() {
    let tasksArray = JSON.parse(localStorage.getItem('tasks'));
    if (tasksArray) {
        tasksArray.forEach(task => {
            let newItem = document.createElement('div');
            newItem.classList.add('item');
            newItem.classList.toggle('completed', task.completed);
            newItem.innerHTML = `
                <p>${task.content}</p>
                <div class="item-btn">
                    <i class="fa-solid fa-pen-to-square"></i>
                    <i class="fa-solid fa-xmark"></i>
                </div>
            `;
            tasks.appendChild(newItem);
        });
    }
}

// Load tasks when page is ready
window.addEventListener('DOMContentLoaded', loadTasksFromLocalStorage);
