const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

addTaskButton.addEventListener('click' , function(){
    const taskText = taskInput.value;

    if(taskText){
        const li = document.createElement('li');
        li.textContent = taskText;
        li.addEventListener('click' , function(){
            li.classList.toggle('completed');  
        });

        const deleteButton = document.createElement('button');
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener('click' , function(){
            taskList.removeChild(li);
        });

        li.appendChild(deleteButton);
        taskList.appendChild(li);
        taskInput.value = "";


    }
})
