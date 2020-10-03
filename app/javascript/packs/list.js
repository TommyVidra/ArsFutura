let newList = document.getElementById('newList');

newList.onclick = function ()
{
    let toDos = document.getElementById('container');

    if (document.getElementById('listName') == null)
    {
        let inputName = document.createElement('input');
        inputName.setAttribute('type', 'text');
        inputName.setAttribute('id', 'listName');
        inputName.setAttribute('class', 'text_input');

        toDos.appendChild(inputName);

        let tmpSubmitBtn = document.createElement('button');
        tmpSubmitBtn.setAttribute('id', 'submit');
        toDos.appendChild(tmpSubmitBtn);
    }


    let tmpSubmitBtn = document.getElementById('submit');
    tmpSubmitBtn.addEventListener('click', (evt) => {
        let inputName =  document.getElementById('listName');
        if(inputName.value === ""){
            toDos.removeChild(inputName);
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