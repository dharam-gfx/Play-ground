import React, { useRef, useState } from 'react'
import useTodo from '../context/todo';

const TodoItem = ( { value } ) => {
  let { id, todo, completed } = value;
  const [editable, setEditable] = useState( false );
  const textInput = useRef();
  const { deleteTodo, updateTodo, toggleComplete } = useTodo()

  const autoFocus = () => {
    setEditable( true );
    textInput.current.focus();
  }

  const submitHandler = ( e ) => {
    e.preventDefault();
    const todo = textInput.current.value.trim();
    if ( todo.length ) {
      updateTodo( id, todo );
      setEditable( false );
    }
  }

  const getRandomColor = () => "#" + Math.floor( Math.random() * 16777216 )
    .toString( 16 ).padStart( 6, "0" );



  return (
    <div className='border-b border-orange-400 pb-1.5'>
      <form onSubmit={submitHandler}>
        <div className='flex'>
          <div className=" w-1.5 rounded-[4px]" style={{ backgroundColor: getRandomColor() }} ></div>
          <div className='py-1 px-2 w-full flex justify-between'>
            <div className=' flex gap-3 grow'>
              {
                completed ? <button type='button' onClick={() => toggleComplete( id )}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                    className="w-8 fill-green-500  hover:fill-green-600">
                    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                  </svg>
                </button>
                  : <button type="button" onClick={() => toggleComplete( id )} className='px-1'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                      className=" w-6 border-2 rounded-full">
                    </svg>
                  </button>
              }
              <div className='mt-1 grow'>
                <input
                  ref={textInput}
                  readOnly={!editable}
                  name='updateTodo'
                  className={` ${completed ? "line-through" : ""} w-full  bg-transparent focus:outline-0 focus:border-0 focus-visible:outline-0 focus-visible:border-0`}
                  type='text'
                  defaultValue={todo}
                />
              </div>
            </div>

            <div className=' flex gap-3'>
              {
                editable ?
                  <button type='button'
                    onClick={() => textInput.current.value.trim() && setEditable( false )}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="fill-green-500 w-6 h-6">
                      <path fillRule="evenodd" d="M9 1.5H5.625c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0 0 16.5 9h-1.875a1.875 1.875 0 0 1-1.875-1.875V5.25A3.75 3.75 0 0 0 9 1.5Zm6.61 10.936a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 14.47a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                      <path d="M12.971 1.816A5.23 5.23 0 0 1 14.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 0 1 3.434 1.279 9.768 9.768 0 0 0-6.963-6.963Z" />
                    </svg>
                  </button>
                  :
                  <button type='submit'
                    onClick={autoFocus}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="fill-teal-500 w-6 h-6">
                      <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z" />
                      <path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z" />
                    </svg>
                  </button>
              }

              <button type='button'
                onClick={() => deleteTodo( id )}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                  className="w-8 fill-red-500 transition-all hover:fill-red-600">
                  <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z" clipRule="evenodd" />
                </svg>
              </button>

            </div>

          </div>
        </div>

      </form>
    </div>
  )
}

export default TodoItem