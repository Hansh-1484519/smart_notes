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
    textBox.classList = 'textBox';
    const save = document.createElement('button');
    save.textContent = 'SAVE';
    box.appendChild(textBox);
    box.appendChild(save);
    note.disabled = true;


    const postNote = () =>{
        const Delete = document.createElement('button');
        Delete.textContent = 'x';
        Delete.classList = 'delete';
        const Area = document.createElement('textarea');
        if(textBox.value){
            note.disabled = false;
            const content = textBox.value;
           Area.classList = 'area';
           Area.textContent = content;
           list.appendChild(Area);
           list.appendChild(Delete);
            box.removeChild(textBox);
            box.removeChild(save);
           // list.innerHTML = textBox.value;
        }

        const deleteNote = () => {
            list.removeChild(Area);
            list.removeChild(Delete);
        }
        Delete.addEventListener('click' , deleteNote);
        Area.addEventListener('click' , () => {
            
        })
    }
    save.addEventListener('click' , postNote);
}


note.addEventListener('click', OpenNote);
//Add.addEventListener('click' , AddTask);

// Update the note 