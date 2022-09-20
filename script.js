var i = 1;
var addedTask = [];
function showTask() {
    var taskInput = document.getElementById('tasks').value;
    var showTask = document.getElementById('showTask');
    addedTask.push(taskInput);

    // showTask.innerHTML += `<li style="list-style-type:none" class="" id="${++i}"><input class="" type="checkbox" onclick="crossTask()" id="${++i}" > ${taskInput} </li>`;
    showTask.innerHTML += `<li style="list-style-type:none" class="" onclick="this.classList.toggle('strikeTHrough')" id="${i++}"> ${taskInput} </li>`;
  // event.classList.toggle('crossOff');
    document.getElementById('tasks').value = '';
    console.log("\n\n"+i);
}
