import React from 'react'
import TodoItem from './TodoItem'
import useTodo from '../context/todo'
export const TodoItems = () => {
  const { todos } = useTodo();
  return (
    <div>
      <div className='p-2 px-3 space-y-3 dark:bg-gray-700 rounded-[10px] h-[calc(100svh-146px)] dark:h-[calc(100svh-144px)] overflow-y-scroll dark:border-0 border border-orange-500'>
        {
          todos?.map( ( item ) => <TodoItem key={item.id} value={item} /> )
        }
      </div>

    </div>
  )
}
