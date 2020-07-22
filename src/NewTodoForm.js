import React from 'react';

const NewTodoForm = (props) => {

  return ( 
    <form onSubmit={props.formSubmitted}>
      <input value={props.newTodo} type="text" name="newTodo" id="newTodo" placeholder="Enter a new task" onChange={props.onNewTodoChange}/>
      <button type="submit">Add Todo</button>
      <button onClick={props.markAllDone} class="allDone">Mark All Done</button>
    </form> 
  );
}
 
export default NewTodoForm;