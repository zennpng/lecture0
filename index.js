import React from 'react';
import { render } from 'react-dom';
import Todo from './Todo'

let id = 0   // for labelling the todos 

class App extends React.Component {
  constructor() {
    super()
    this.state = {   // add todos to app state
      todos: [],
    }
  }

  addTodo() {
    const text = prompt("Enter your TODOs here!")
    this.setState({   // set todos state
      todos: [
        ...this.state.todos,   // ... creates a new array with contents of the array after the ...
        {id: id++,   // enable id tracker
         text: text, 
         checked: false},   // set initial checked state
       ], 
    })
  }

  removeTodo(id) {   
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)   // filter the todos that are not of input id
    })
  }

  toggleTodo(id) {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id !== id) return todo   // dont do anything for todos that are not of input id
        return {
          id: todo.id,
          text: todo.text,
          checked: !todo.checked,   // change state of checked when todo is toggle 
        }
      })
    })
  }

  render() {
    return (
      <div>
        <div>Todo count: {this.state.todos.length}</div>   
        <div>Unchecked todo count: {this.state.todos.filter(todo => !todo.checked).length}</div>  
        <button onClick={() => this.addTodo()}>Add TODO</button>
        <ul>
          {this.state.todos.map(todo => (
            <Todo    // the todo react component 
              onToggle={() => this.toggleTodo(todo.id)}  // run func when checkbox is toggled 
              onDelete={() => this.removeTodo(todo.id)}  // run func when delete button is clicked
              todo={todo}
            />
          ))}
        </ul>
      </div>
    )
  }
}

render(<App />, document.getElementById('root'));
