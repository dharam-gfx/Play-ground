import React, { useState } from 'react'
import userAuth from './Context'
const UserAuthProvider = ( { children } ) => {
    const [isLogin, setLogin] = useState( false )
    return (
        <userAuth.Provider value={{ isLogin, setLogin }}>
            {children}
        </userAuth.Provider>
    )
}

export default UserAuthProvider