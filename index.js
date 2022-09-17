
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");
const textEl = document.querySelector(".text");




todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('change', filterTodo);
textEl.addEventListener('click', deleteCheck);


function addTodo(event){
    event.preventDefault();

    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo")

    const newTodo = document.createElement("li");
    if(todoInput.value == ""){
        newTodo.textContent = "Enter item first"
    } else{
        newTodo.textContent = todoInput.value;
    }
    
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);

    //check mark button
    const completeButton = document.createElement("button")
    completeButton.innerHTML = '<i class="fas fa-check"></i>';
    completeButton.classList.add("complete-btn");
    todoDiv.appendChild(completeButton);
    //check thrash button
    const trashButton = document.createElement('button')
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    //append to list
    todoList.appendChild(todoDiv);
    //clear todo input value
    todoInput.value = "";

    textEl.textContent = ""

}

function deleteCheck(e){
  const item = e.target;
  //delete
  if(item.classList[0]=== "trash-btn") {
    const todo = item.parentElement;
    //animation
    todo.classList.add("fall");
    todo.addEventListener('transitionend', function(){
        todo.remove();
    });


  }

  //check
  if(item.classList[0] === "complete-btn"){
    const todo = item.parentElement;
    //animation
    todo.classList.toggle('completed');
  }


}





function filterTodo(e){
    const todos =  todoList.childNodes;
    todos.forEach(function(todo) {
        switch (e.target.value) {
            case "all":
                todo.style.display = 'flex';
                break;
            case "completed":
                if(todo.classList.contains('completed')) {
                    todo.style.display = 'flex';
                } else{
                    todo.style.display = "none";
                }
                break;
            case "uncompleted":
                if(!todo.classList.contains("completed")){
                    todo.style.display = 'flex';
                } else{
                    todo.style.display = "none";
                }   
                break; 
        }
    });
}