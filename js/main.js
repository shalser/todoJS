let textAdd = document.querySelector('.inputText')
let buttonAdd = document.querySelector('.buttonAdd')
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
                <button class="delete" onclick="deleteTodo(${i})">Delete</button>
<!--                <button class="done" data-done>Done</button>-->
                <button class="edit" data-edit="item_${i + 1}" data-number="${i}">Edit</button>
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


//todo--------------------------EDIT TODO--------------------------------------------


Wrap.addEventListener('click', (event) => {

    let numberTextNode = event.target.getAttribute('data-edit')
    let labelWithThisId = Wrap.querySelector('[for=' + numberTextNode + ']')
    let dataEdit = labelWithThisId.firstChild.nextSibling
    let dataBlock = dataEdit.lastElementChild
    let dataBlockText = dataBlock.innerHTML

    document.querySelector('.modal').style.display = 'flex'
    let formInput = document.querySelector('#formInput')
    formInput.value = dataBlockText

    let numberBlockTodo = event.target.getAttribute('data-number')

    let hiddenBlock = document.querySelector('.hiddenBlock')
    hiddenBlock.innerHTML = numberBlockTodo

})


document.querySelector('.formButton').addEventListener(
    'click',
    () => {
        let formInput = document.querySelector('#formInput')
        let formInputValue = formInput.value

        let hiddenBlock = document.querySelector('.hiddenBlock')
        let numberTodo = hiddenBlock.innerHTML

        if (formInputValue === newTodo[numberTodo]['text'] || formInputValue === '') {
            return false
        } else {
            newTodo[numberTodo]['text'] = formInput.value
            addTodos()
            localStorage.setItem('todo', JSON.stringify(newTodo))
            document.querySelector('.modal').style.display = 'none'
        }
    })


let close = document.querySelector('.formClose')
close.addEventListener('click', () => {
    document.querySelector('.modal').style.display = 'none'
})




















