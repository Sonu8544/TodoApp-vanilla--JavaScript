const inputBox = document.getElementById("input-box");
const listContainer = document.querySelector("#list-container");

function addTodo() {
    if (inputBox.value === '') {
        alert("Task is Empty...")
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li)

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);

    }
    inputBox.value = "";
    saveTodo()
}

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked")
        saveTodo()
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveTodo()
    }
}, false)

function saveTodo(){
    localStorage.setItem("todo", listContainer.innerHTML);
}

function showTodo(){
    listContainer.innerHTML = localStorage.getItem("todo")
}
showTodo()