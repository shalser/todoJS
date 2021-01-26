let textAdd = document.querySelector('.inputText')
let buttonAdd = document.querySelector('.buttonAdd')
// let Delete = document.querySelector('.delete')
let Edit = document.querySelector('.edit')
let Done = document.querySelector('.done')
let Wrap = document.querySelector('.wrap')
let Error = document.querySelector('.error')


let newTodo = []

if (localStorage.getItem('todo')) {
    newTodo = JSON.parse(localStorage.getItem('todo'))
    addTodos()
}

buttonAdd.addEventListener('click', function () {
    let text = textAdd.value

    if (text !== '') {
        Error.innerHTML = ''
        let todo = {
            text: text,
            checked: false,
            important: false,
        }
        newTodo.push(todo)
        textAdd.value = ''
        addTodos()
        localStorage.setItem('todo', JSON.stringify(newTodo))
    } else {
        Error.innerHTML = 'Напишите что-нибудь!'
    }
})

function addTodos() {
    let displayMessage = ''
    newTodo.forEach(function (item, i) {
        displayMessage += `
        <div class="item" id="${i}">
        
        <div class="checkBlock">
            <input type="checkbox" id="item_${i + 1}" class="${i}" ${item.checked ? 'checked' : ''}>
            <label for="item_${i + 1}">
                <div class="todoBlock ${item.checked ? 'checked' : ''}">              
                    <div class="nameTodo">Дело:</div>
                    <div class="textTodo">${item.text}</div>             
                </div>
            </label>
        </div>
        
            <div class="buttonsBlock">
                <button class="delete" data-del data-id="${i}" onclick="deleteTodo(${i})">Delete</button>
                <button class="done" data-done>Done</button>
                <button class="edit">Edit</button>
            </div>

        </div>`
    })
    Wrap.innerHTML = displayMessage
}


Wrap.addEventListener('change', function (event) {
    let inputId = (event.target.getAttribute('id'))
    let inputClass = (event.target.getAttribute('class'))
    let labelWithThisId = Wrap.querySelector('[for=' + inputId + ']')
    let data = labelWithThisId.firstChild.nextSibling


    if (newTodo[inputClass]['checked'] === false) {
        newTodo[inputClass]['checked'] = true
        data.classList.add('checked')
        localStorage.setItem('todo', JSON.stringify(newTodo))
    } else {
        newTodo[inputClass]['checked'] = false
        data.classList.remove('checked')
        localStorage.setItem('todo', JSON.stringify(newTodo))
    }
})


function deleteTodo(id) {
    newTodo.splice(id, 1)
    localStorage.setItem('todo', JSON.stringify(newTodo))
    addTodos()
}


// function deleteTodo(id) {
//     let del = document.getElementsByClassName('delete').length;
//     for(let i = 0; i < del; i++){
//         document.getElementsByClassName('delete')[i].onclick = function(){
//             // let elem = del.getAttribute('data-id')
//             // let elem = document.querySelector('[data-id]')
//             let id = +this.dataset.id
//             newTodo.splice(id, 1)
//             localStorage.setItem('todo', JSON.stringify(newTodo))
//             addTodos()
//             // location.reload()
//             // console.log(id)
//         }
//     }
// }

// window.onload = function(){
//     let del = document.getElementsByClassName('delete').length;
//     for(let i = 0; i < del; i++){
//         document.getElementsByClassName('delete')[i].onclick = function(){
//             // let elem = del.getAttribute('data-id')
//             // let elem = document.querySelector('[data-id]')
//             let id = +this.dataset.id
//             newTodo.splice(id, 1)
//             localStorage.setItem('todo', JSON.stringify(newTodo))
//             addTodos()
//             location.reload()
//             // console.log(id)
//             return false
//         }
//     }
// }


// document.querySelector('.delete').addEventListener('click', function () {
//     let elem = document.querySelector('[data-id]')
//     let id = +elem.dataset.id
//     newTodo.splice(id, 1)
//     localStorage.setItem('todo', JSON.stringify(newTodo))
//     addTodos()
// })

// document.addEventListener('click', function (e) {
//     let btnDelete = e.target
//     // console.log(btnDelete)
//     // let elem = document.querySelector('[data-id]')
//     let elem = btnDelete.getAttribute('data-id')
//     // console.log(elem)
//     // let id = +elem.dataset.id
//     newTodo.splice(elem, 1)
//     localStorage.setItem('todo', JSON.stringify(newTodo))
//     addTodos()
// })

// let Delete = document.querySelectorAll('.delete')

// console.log(Delete)

// for (let i = 0; i <= Delete.length; i++) {
//     Delete[i].addEventListener('click', function () {
//         let elem = document.querySelector('[data-id]')
//         let id = +elem.dataset.id
//         newTodo.splice(id, 1)
//         localStorage.setItem('todo', JSON.stringify(newTodo))
//         addTodos()
//     })
// }

// document.addEventListener('click', function(e){
//     console.log('target', e.target);
// });

// let a = document.querySelector('.delete')
// console.log(a)


// function deleteTodo(id) {
//     newTodo.splice(id, 1)
//     localStorage.setItem('todo', JSON.stringify(newTodo))
//     addTodos()
// }


















