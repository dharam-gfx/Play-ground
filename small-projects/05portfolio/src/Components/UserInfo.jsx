import React, { useContext } from 'react'
import userAuth from '../Context/Context'

const UserInfo = () => {

  const {isLogin,setLogin} = useContext(userAuth)
  return (
    <>
    {
      !isLogin?
      <button className='bg-green-500 rounded-sm px-3' type='button'  onClick={()=> setLogin(true)}>Login</button>
      : <button className='bg-red-500 rounded-sm px-3' type='button' onClick={()=> setLogin(false)}>Logout</button>
    }
    </>
  )
}

export default UserInfo