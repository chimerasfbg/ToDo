const form = document.querySelector('.todo-input');
const addBtn = document.querySelector('.todo-btn');
const displayContainer = document.querySelector('.todo-container');
const ul = document.querySelector('.todo-list');
const file =document.querySelector('.container');

addBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    let input = form.value.trim();
    ul.innerHTML += `
    <div class="mb-3 mt-1 d-flex justify-content-center align-items-center ">
    <li class="mt-1 form-control item">${input}
        <div class="float-end">
            <button class="btn-primary remove" ><i class=" add fas fa-trash" ></i></button>
            <button class="btn-primary check"><i class=" add fas fa-check"></i></button>
        </div>  
    </li>
    
    </div>`;
    
    form.value=""
});

displayContainer.addEventListener('click',(e)=>{
    e.preventDefault();
    if(e.target.classList.contains('remove')){
        e.target.parentElement.parentElement.parentElement.remove()
        
    } 
    if (e.target.classList.contains('check')){
        e.target.parentElement.parentElement.classList.toggle('check');
        setTimeout(function(){
            e.target.parentElement.parentElement.parentElement.remove()
        },4000)
    }
});

