import {createContext,useContext} from 'react';

export const themeContext = createContext({
    themeMode:"light",
    darkTheme:()=>{},
    lightTheme:()=>{}
})

export const ThemeProvide = themeContext.Provider;

export default function useTheme(){
return useContext(themeContext)
}