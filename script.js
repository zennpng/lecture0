const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

function newTodo() {
  const newthing = document.getElementById('todo_name').value

  const newlistitem = document.createElement('div')
  newlistitem.className = 'content'

  const checkbox = document.createElement('input') 
  checkbox.type = 'checkbox'
  checkbox.className = 'donetodo'
  checkbox.onchange = function() {
    if (checkbox.checked) {
      uncheckedCountSpan.innerHTML--
    }else{uncheckedCountSpan.innerHTML++}
  }

  const deletebutton = document.createElement('button')
  deletebutton.innerHTML = 'Delete' 
  deletebutton.onclick = function() {
    list.removeChild(newlistitem)
    itemCountSpan.innerHTML--
    if (checkbox.checked) {
    }else{uncheckedCountSpan.innerHTML--}
  }

  newlistitem.append(checkbox)
  newlistitem.append(newthing)
  newlistitem.append(deletebutton)
  list.appendChild(newlistitem)
  itemCountSpan.innerHTML++
  uncheckedCountSpan.innerHTML++
  document.getElementById("form").reset()
}

