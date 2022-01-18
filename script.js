const input = document.querySelector('#content');
const list = document.querySelector('.add')
const Add = document.getElementById('submit');
const note = document.getElementById('note');
const box = document.querySelector('.box');

/*
const AddTask = () => {
    const newitem = document.createElement('li');
    newitem.textContent = input.value;
    list.appendChild(newitem);
}
*/
const OpenNote = () =>{
    const textBox = document.createElement('textarea');
    var save = document.createElement('button');
    save.textContent = 'save';
    box.appendChild(textBox);
    box.appendChild(save);
    note.disabled = true;


    const postNote = () =>{
        if(textBox.value){
            note.disabled = false;
            const content = textBox.value;
           const Area = document.createElement('p');
           Area.classList = 'area';
           Area.textContent = content;
           list.appendChild(Area);
            box.removeChild(textBox);
            box.removeChild(save);
           // list.innerHTML = textBox.value;
        }
    }
    save.addEventListener('click' , postNote);
}


note.addEventListener('click', OpenNote);
Add.addEventListener('click' , AddTask);