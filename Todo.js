const Todo = props => (
    <li>
      <input 
      type="checkbox" 
      checked={props.todo.checked}   // track checked state
      onChange={props.onToggle}   // track toggle state 
      />
      <button onClick={props.onDelete}>delete</button>
      <span>{props.todo.text}</span>
    </li>
  )

export default Todo;