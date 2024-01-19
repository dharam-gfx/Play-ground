import React from 'react'
import { Button } from 'react-bootstrap';
import { useNavigate, useSearchParams } from 'react-router-dom'

const UseSearchParamsHooks = () => {
    const navigate=useNavigate();
    const [searchParams,setSearchParams] = useSearchParams();
    console.log(searchParams);
    let age = searchParams.get("age");
    let name = searchParams.get("name");
  return (
    <div>
        <h3>UseSearchParamsHooks</h3>
        <h4>age : {age??"0"}</h4>
        <h4>name : {name??"----"}</h4>
        <label htmlFor='age'>Enter age</label>
        <input type='number'  name='age' className='form-control' placeholder='Enter age'
        onChange={(e)=>setSearchParams({age:e.target.value,name:name})}
        ></input>
        <label htmlFor='name'>Enter name</label>
        <input type='text'  name='name' className='form-control' placeholder='Enter name'
        onChange={(e)=>setSearchParams({name:e.target.value,age:age})}
        ></input>

        <Button variant='success' onClick={()=>navigate("/")}>Go to home</Button>
    </div>
    
  )
}

export default UseSearchParamsHooks