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
        Area.onchange = function(){
            const newContent = Area.value;
            localStorage.setItem( count , newContent );
        }

        const deleteNote = () => {
            list.removeChild(Area);
            list.removeChild(Delete);
            localStorage.removeItem(count);
        }
        Delete.addEventListener('click' , deleteNote);
        Area.addEventListener('click' , () => {
            
        })
    }
    save.addEventListener('click' , postNote);
}


note.addEventListener('click', OpenNote);
//Add.addEventListener('click' , AddTask);

// Print the locally stored previous notes;

const localCount = localStorage.getItem('count');
for( var i = 1 ; i <= localCount ; i++){

    if( localStorage.getItem(i)){
        let hello = localStorage.getItem(i);
        const Delete1 = document.createElement('button');
        const Area1 = document.createElement('textarea');
        Area1.classList = 'area';
        Area1.textContent = hello;
        
        Delete1.textContent = 'x';
        Delete1.classList = 'delete';
        
        list.appendChild(Area1);
        list.appendChild(Delete1);

        Area1.onchange = function(){
            for( var x = 1 ; x <= localCount ; x++){
                if( localStorage.getItem(x) === hello){
                    hello = Area1.value;
                    localStorage.setItem(x , hello);
                }
            }
        }
        
        const delete1Note = () => {
            list.removeChild(Area1);
            list.removeChild(Delete1);
            for( var x = 1 ; x <= localCount ; x++){
                if( localStorage.getItem(x) === hello){
                    localStorage.removeItem(x);
                }
            }

        }
        Delete1.addEventListener('click' , delete1Note);
    }
}
document.write("Developed by @Hansh Raj Sharma");

