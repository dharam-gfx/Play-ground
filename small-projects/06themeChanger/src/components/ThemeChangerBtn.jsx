import React from 'react'
import useTheme from '../context/Theme'
export const ThemeChangerBtn = () => {

    const { themeMode, lightTheme, darkTheme } = useTheme();

    const themeModeHandler = ( e ) => {
        lightTheme()
        if ( e.currentTarget.checked ) darkTheme();
    }
    return (
        <div>
            <div className='border-4 rounded-xl mb-2 px-3 pt-4 '>
                <label className="inline-flex items-center mb-5 cursor-pointer">
                    <span className="mr-4 text-sm font-medium text-gray-900 dark:text-white-300">{themeMode}</span>
                    <input checked={themeMode == "dark"} onChange={themeModeHandler} type="checkbox" value="" className="sr-only peer" />
                    <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                </label>
            </div>
        </div>
    )
}
