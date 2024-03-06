import React, { useEffect, useState } from 'react'
import AddTodo from '../Components/AddTodo'
import { TodoItems } from '../Components/TodoItems'
import { TodoProvider } from '../context/todo'
const TODO = () => {

  const [todos, setTodos] = useState( JSON.parse( localStorage.getItem( 'todos' ) ) || [] );


  // useEffect( () => {
  //   let items = JSON.parse( localStorage.getItem( 'todos' ) );
  //   items && items.length > 0 && setTodos( items )
  // }, [] );

  useEffect( () => {
    localStorage.setItem( 'todos', JSON.stringify( todos ) );
  }, [todos] )

  const addTodo = ( value ) => {
    setTodos( ( prev ) => [{ id: Date.now(), todo: value, completed: false, }
      , ...prev] )
  }

  const deleteTodo = ( id ) => {
    setTodos( ( prev ) => prev.filter( todo => todo.id !== id ) );

  }

  const updateTodo = ( id, todoValue ) => {
    setTodos( ( prev ) => prev.map( ( todo ) => todo.id === id ?
      { ...todo, todo: todoValue } : todo ) );
  }

  const toggleComplete = ( id ) => {
    setTodos( ( prev ) => prev.map( ( todo ) => todo.id === id ?
      { ...todo, completed: !todo.completed } : todo ) );
  }

  return (

    <TodoProvider value={{ todos, addTodo, deleteTodo, updateTodo, toggleComplete }}>
      <div className='dark:bg-gray-900 dark:text-white'>
        <div>
          <h1 className='text-center font-bold py-2 text-orange-400 text-2xl'>My Todo</h1>
        </div>
        <div className='max-w-2xl mx-auto  p-2'>
          <AddTodo />
          <div className='mt-2'>
            <TodoItems ></TodoItems>
          </div>
        </div>
      </div>
    </TodoProvider>

  )
}

export default TODO