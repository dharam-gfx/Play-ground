import React, { useEffect, useState } from 'react'
import {ListGroup} from 'react-bootstrap'
import { Link,NavLink } from 'react-router-dom';
import  Employees  from "../Data/employee.json"
const User = () => {


    const [users,setUsers]=useState();

        useEffect(()=>{
            setUsers(Employees.Employees)
        },[users])
  return (
    <div>

    <ListGroup  className='list-group w-50' >
        {
            users && users.map((user) => <ListGroup.Item action  variant="primary" className='list-list-group-item'key={user.employeeCode}>
            
            <NavLink  className="d-block" to={"/userdetails/"+user.employeeCode}>{user.firstName}</NavLink>

            </ListGroup.Item>)
        }
    </ListGroup>

    </div>
  )
}

export default User