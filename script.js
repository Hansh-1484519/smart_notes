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
    var count  = 1;

    if(localStorage.getItem('count')){
        count = Number(localStorage.getItem('count')) + 1;
    }

    const postNote = () =>{ 
        localStorage.setItem( 'count' , count);
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

           localStorage.setItem( count , content);

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
if( localStorage.getItem('1')){
    let hello = localStorage.getItem('1');
    const Delete1 = document.createElement('button');
    const Area1 = document.createElement('textarea');
    Area1.classList = 'area';
    Area1.textContent = hello;
    
    Delete1.textContent = 'x';
    Delete1.classList = 'delete';
    
    list.appendChild(Area1);
    list.appendChild(Delete1);
    const delete1Note = () => {
        list.removeChild(Area1);
        list.removeChild(Delete1);
    }
    Delete1.addEventListener('click' , delete1Note);
    document.write(hello);
}

