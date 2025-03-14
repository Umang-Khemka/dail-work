let btn = document.querySelector('button');
let ul = document.querySelector('ul');
let inp = document.querySelector('input');
let delbtn = document.getElementById('del');

function addTask() {
    let val = inp.value.trim(); 

    if (val !== "") { 
        let li = document.createElement('li');
        li.textContent = val;
        ul.appendChild(li); 
        inp.value = ""; 
    } else {
        alert("Please enter a task!");
    }
}

function deleteTask() {
    let li = ul.querySelector('li:last-child'); // Select last task
    if (li) {
        ul.removeChild(li);
    } else {
        alert("No tasks to delete!");
    }
}

// Detect "Delete" key press anywhere on the page
document.addEventListener('keydown', function (e) {
    if (e.key === 'Delete') {
        deleteTask();
    }
});

delbtn.addEventListener('click', deleteTask);

btn.addEventListener('click', addTask);

inp.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addTask();
    }
});
