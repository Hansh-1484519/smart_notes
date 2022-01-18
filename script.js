const input = document.querySelector('#content');
const list = document.querySelector('.add')
const Add = document.getElementById('submit');
const note = document.getElementById('note');
const AddTask = () => {
    const newitem = document.createElement('li');
    newitem.textContent = input.value;
    list.appendChild(newitem);
}
const OpenNote = () =>{
    const textBox = document.createElement('textarea');
    const btn = document.createElement('button');
    list.appendChild(textBox);
    list.appendChild(btn);
}
note.addEventListener('click', OpenNote);
Add.addEventListener('click' , AddTask);