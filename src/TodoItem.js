import React from 'react';

const TodoList = (props) => {

  const { todo, index } = props;

  return ( 
    <li>
      <input type="checkbox"
        checked={todo.done}
        onChange={(event) => {props.toggleTodoDone(event, index)}}
      />
      <span className={todo.done ? 'done' : ''}>{todo.content}</span>
      <button onClick={(event) => {props.removeTodo(event, index)}}>Remove Todo</button>
    </li>
   );
}
 
export default TodoList;