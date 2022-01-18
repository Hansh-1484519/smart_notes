const input = document.querySelector('#content');
const list = document.querySelector('.add')
const Add = document.getElementById('submit');
const AddTask = () => {
    const newitem = document.createElement('li');
    newitem.textContent = input.value;
    list.appendChild(newitem);
}

Add.addEventListener('click' , AddTask);