let addTask = document.getElementById("addTaskButton");
let userInput = document.getElementById("taskInput");
let addTaskList = document.getElementById("taskList");
let addCounter = document.getElementById("counter");
let addPriority = document.getElementById("priority")
let removeFinishedTasks = document.getElementById("removeFinishedTasksButton");

addTask.addEventListener("click",function (button){
    let getColorRed = true;
    if (userInput.value.length > 5 && userInput.value.length <= 99 && addPriority.value <= 10 && addPriority.value > 0){
        let addTaskLi = document.createElement("li");
        addTaskList.appendChild(addTaskLi);
        let addH1 = document.createElement("h1");
        addH1.innerText = userInput.value;
        userInput.value = '';
        addTaskLi.appendChild(addH1);
        addTaskLi.className = "store-list-item";
        if (addPriority.value === "1"){
            addTaskLi.setAttribute("value", "j")
        }else if (addPriority.value === "2"){
            addTaskLi.setAttribute("value", "i")
        }else if (addPriority.value === "3"){
            addTaskLi.setAttribute("value", "h")
        }else if (addPriority.value === "4"){
            addTaskLi.setAttribute("value", "g")
        }else if (addPriority.value === "5"){
            addTaskLi.setAttribute("value", "f")
        }else if (addPriority.value === "6"){
            addTaskLi.setAttribute("value", "e")
        }else if (addPriority.value === "7"){
            addTaskLi.setAttribute("value", "d")
        }else if (addPriority.value === "8"){
            addTaskLi.setAttribute("value", "c")
        }else if (addPriority.value === "9"){
            addTaskLi.setAttribute("value", "b")
        }else if (addPriority.value === "10"){
            addTaskLi.setAttribute("value", "a")
        }
        let addButtonDelete = document.createElement("button");
        addButtonDelete.innerText = "Delete";
        addButtonDelete.type = "button";
        addTaskLi.appendChild(addButtonDelete);

        let addButtonComplete = document.createElement("button");
        addButtonComplete.innerText = "Complete";
        addButtonComplete.type = "button";
        addTaskLi.appendChild(addButtonComplete);

        let addPriorityButton = document.createElement("button")
        addPriorityButton.innerText = "Priority:" + addPriority.value
        addPriorityButton.setAttribute("disabled", true)
        addPriority.value = '';
        addPriorityButton.type = "number"
        addTaskLi.appendChild(addPriorityButton)

        addButtonComplete.addEventListener("click",function (eve){
            if ( getColorRed === true){
                addTaskLi.classList.add("done")
                addCounter.innerText --
                getColorRed = false
            }else if (getColorRed === false){
                addTaskLi.classList.remove("done")
                addCounter.innerText ++
                getColorRed = true
            }
        });
        addButtonDelete.addEventListener("click",function (eve){
            addTaskLi.remove()
            addCounter.innerText -= 1
        });
        removeFinishedTasks.addEventListener("click",function (eve){
            if (addTaskLi.className === "store-list-item done"){
                addTaskLi.remove()
            }
        });
        let newarr = Array.from(addTaskList.children);
        addCounter.innerText = newarr.length
    }
    let stores_li = document.querySelectorAll('.store-list-item');
    [].slice.call(stores_li).sort(function(a, b) {
        let textA = a.getAttribute('value').toLowerCase()
        let textB = b.getAttribute('value').toLowerCase()
        return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    })
        .forEach(function(el) {el.parentNode.appendChild(el)});
});