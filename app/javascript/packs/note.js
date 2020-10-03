
let btn = document.getElementById('addNew');
let tasks = document.getElementsByClassName('task');

btn.onclick = function()
{
    if(document.getElementById('toDo').classList === "")
    {
        let toDos = document.getElementById('toDo');
        toDos.setAttribute('class', 'zadatak');
    }
    setTimeout(function () {
        let toDos = document.getElementById('toDo');
        let task = prompt("Enter a new task");

        if(task === "" || !task.replace(/\s/g, '').length)
        {
            alert("A new task can't be blank");
        }
        else
        {
            let tmpDelete = document.createElement('button');
            tmpDelete.setAttribute('class', 'delete-button');

            let tmpEdit = document.createElement('button');
            tmpEdit.setAttribute('class', 'edit-button');

            let tmpTask = document.createElement('input');
            tmpTask.setAttribute('type', 'checkbox');
            let tmpID = Date.now().toString();
            tmpTask.setAttribute('id', tmpID);

            let tmpContainer = document.createElement('ul');
            tmpContainer.setAttribute('id', tmpID);
            toDos.appendChild(tmpContainer);

            let tmpIco = document.createElement('i');
            tmpIco.setAttribute('class', "fa fa-square-o");
            tmpIco.setAttribute('aria-hidden', "true");

            let tmpLable = document.createElement('label');
            tmpLable.setAttribute('id', tmpID);

            let p = document.createElement('p');
            p.textContent = task;

            tmpContainer.appendChild(tmpLable);
            tmpLable.appendChild(tmpIco);
            tmpLable.appendChild(tmpTask);
            tmpLable.appendChild(p);

            tmpLable.appendChild(tmpEdit);
            tmpLable.appendChild(tmpDelete);

            tmpLable.onclick = function()
            {
                id = tmpLable.getAttribute('id');
                if(tmpLable.childNodes[1].checked){
                    tmpIco.setAttribute('class', 'fa fa-check-square-o');
                    doneTasks = document.getElementById('doneTasks');
                    doneTasks.appendChild(tmpContainer);
                }
                // console.log(id);
                else{
                    tmpIco.setAttribute('class', 'fa fa-square-o');
                    toDos.appendChild(tmpContainer);
                }
            }
            tmpEdit.onclick = function()
            {
                task = prompt("Edit task");
                if(task === "" || !task.replace(/\s/g, '').length)
                {
                    alert("A new task can't be blank");
                }
                else
                {
                    p.textContent = task;
                }
            }
        }
    }, 200);

    // let toDos = document.getElementById('toDo');
    // let task = prompt("Enter a new task");
    //
    // if(task === "" || !task.replace(/\s/g, '').length)
    // {
    //     alert("A new task can't be blank");
    // }
    // else
    // {
    //     let tmpTask = document.createElement('input');
    //     tmpTask.setAttribute('type', 'checkbox');
    //     let tmpID = Date.now().toString();
    //     tmpTask.setAttribute('id', tmpID);
    //
    //     let tmpLable = document.createElement('label');
    //     tmpLable.textContent = task;
    //     tmpLable.setAttribute('for', tmpID);
    //
    //     toDos.appendChild(tmpTask);
    //     toDos.appendChild(tmpLable);
    // }

    // let tmpInput = document.createElement('input');
    // tmpInput.setAttribute('type', 'text');
    // tmpInput.setAttribute('id', 'input');
    // tmpInput.setAttribute('class', 'text_input');
    // toDos.appendChild(tmpInput);

    // let tmpSubmitBtn = document.createElement('button');
    // tmpSubmitBtn.setAttribute('id', 'submit');
    // toDos.appendChild(tmpSubmitBtn);
    //
    // tmpSubmitBtn.addEventListener('click', (evt) => {
    //     if(tmpInput.value == ""){
    //         toDos.removeChild(tmpInput);
    //         toDos.removeChild(tmpSubmitBtn);
    //         alert("The input is empty");
    //     }
    //     else{
    //         let newToDo = document.createElement('p');
    //         newToDo.setAttribute('class', 'task');
    //         newToDo.textContent = tmpInput.value;
    //         toDos.removeChild(tmpInput);
    //         toDos.removeChild(tmpSubmitBtn);
    //         toDos.appendChild(newToDo);
    //     }
    //
    // });
}

//Htio sam napraviti funkciju koja bi stvarala nove id-jeve
// function returnNewId()