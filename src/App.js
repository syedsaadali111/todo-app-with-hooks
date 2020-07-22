import React, { useState, useCallback, useEffect } from 'react';
import NewTodoForm from './NewTodoForm';
import TodoList from './TodoList';

const App = () => {

  const [newTodo, setNewTodo] = useState('');
  const [todos, setTodos] = useState([]);
  
  const onNewTodoChange = useCallback( (e) => {
    setNewTodo(e.target.value);
  }, []);

  const formSubmitted = useCallback( event => {
    event.preventDefault();
    if (!newTodo.trim()) return;
    setTodos([
      {
        id: todos.length ? todos[0].id + 1 : 1,
        content: newTodo,
        done: false
      },
      ...todos
    ]);

    setNewTodo('');
  }, [newTodo, todos]);

  useEffect( () => {
    console.log("todos: ", todos);
  }, [todos]);

  const toggleTodoDone = useCallback((event, index) => {
    const newTodos = [...todos];
    newTodos[index] = {
      ...newTodos[index],
      done: event.target.checked
    }
    setTodos(newTodos);
  }, [todos]);

  const removeTodo = useCallback((event, index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }, [todos]);

  const markAllDone= useCallback(() => {
    const updatedTodos = todos.map( (todo) => {
      return {
        ...todo,
        done: true
      };
    });
    setTodos(updatedTodos)
  }, [todos]);

  return(
    <div>
      <h3>Todo App with only Hooks</h3>
      <NewTodoForm
        onNewTodoChange={onNewTodoChange}
        formSubmitted={formSubmitted}
        markAllDone={markAllDone}
        newTodo={newTodo}
      />
      <TodoList
        todos={todos}
        toggleTodoDone={toggleTodoDone}
        removeTodo={removeTodo}
      />
    </div>
  );
}

export default App;
