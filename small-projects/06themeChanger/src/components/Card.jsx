import React from 'react'

export const Card = () => {
  return (
    <div>
         <div className=''>
          <div className="bg-white dark:bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
            <div>
              <span className="inline-flex items-center justify-center p-2 bg-indigo-500 rounded-md shadow-lg">
                <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                </svg>
              </span>
            </div>
            <h3 className="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">Writes Upside-Down</h3>
            <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
              The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.
            </p>
          </div>
        </div>
    </div>
  )
}
