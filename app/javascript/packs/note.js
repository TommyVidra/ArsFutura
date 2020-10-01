
let btn = document.getElementById('addNew');
let tasks = document.getElementsByClassName('task');

btn.onclick = function()
{
    if(document.getElementById('toDo').classList == "")
    {
        let toDos = document.getElementById('toDo');
        toDos.setAttribute('class', 'zadatak');
    }
    let toDos = document.getElementById('toDo');
    let tmpInput = document.createElement('input');
    tmpInput.setAttribute('type', 'text');
    tmpInput.setAttribute('id', 'input');
    tmpInput.setAttribute('class', 'text_input');
    toDos.appendChild(tmpInput);

    let tmpSubmitBtn = document.createElement('button');
    tmpSubmitBtn.setAttribute('id', 'submit');
    toDos.appendChild(tmpSubmitBtn);

    tmpSubmitBtn.addEventListener('click', (evt) => {
        if(tmpInput.value == ""){
            toDos.removeChild(tmpInput);
            toDos.removeChild(tmpSubmitBtn);
            alert("The input is empty");
        }
        else{
            let newToDo = document.createElement('p');
            newToDo.setAttribute('class', 'task');
            newToDo.textContent = tmpInput.value;
            toDos.removeChild(tmpInput);
            toDos.removeChild(tmpSubmitBtn);
            toDos.appendChild(newToDo);
        }

    });
}
function memSort(e)
{
    var key=e.keyCode || e.which;
    if (key==13){
        alert("Enter was pressed ");
    }
}