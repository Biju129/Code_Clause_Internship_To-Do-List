const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function AddTask() {
    if (inputBox.value === '') {
        alert("You must type something !!");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    const input = document.getElementById("input-box");
    input.addEventListener("keypress", function(event) {
    if (event.key === "Enter"){
        event.preventDefault();
        document.getElementById("mybtn").click();
    }
    const Event1 = new KeyboardEvent('keydown', {
        key: 'Enter',
        code: 'Enter',
        which: 13,
        keyCode: 13,
      });
    
      document.getElementById('mybtn').dispatchEvent(Event1);
});
    inputBox.value = '';
    saveData();
}

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }

}, false);

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML= localStorage.getItem("data");
}

showTask();

