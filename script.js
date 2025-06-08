const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

function addTask()
{
    const taskText = taskInput.value.trim();

    if(taskText !== "")
    {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
        <span>${taskText}</span>
        <button class="btn" onclick="deleteTask(this)">Delete Todo</button>
    `

        taskList.appendChild(listItem);

        taskInput.value = "";
    }
    else
    {
        alert("No Data Found to Add in Todo");
    }

}
function deleteTask(button) {
    const listItem = button.parentElement; 
    taskList.removeChild(listItem);
}
