document.querySelector('#push').onclick = function(){
    if(document.querySelector('#newtask-input').value.length == 0){
        alert('Please enter a task');
    }
    else{
        var toDoTask = document.querySelector('#newtask input').value;
        localStorage.setItem('mytodoValue', doDoTask);
        document.querySelector('#tasks').innerHTML += `<div class="task">
        <span id="taskname">${mytodoValue}</span>
        <button class="delete">
        <i class="far fa-trash-alt"></i>
        </button>
        </div>`;

        var current_tasks = document.querySelectorAll('.delete');
        for(var i = 0; i < current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentElement.remove();
            }
        }
        document.querySelector('#newtask-input').value = '';
        var tasks = document.querySelectorAll('.task');
        for(var i = 0; i < tasks.length; i++){
            tasks[i].onclick = function(){
                this.classList.toggle('completed');
            }
        }
    }

}
