
function createTask(){
    const paranode = document.querySelector("#display");
    const task = document.querySelector("#task");
    const node = document.createElement("p");
    const nodetext = document.createTextNode(task.value);
    node.appendChild(nodetext);
    paranode.appendChild(node);
    task.value = " ";

}