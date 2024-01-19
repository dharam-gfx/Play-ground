import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import  Employees  from "../Data/employee.json"
import { Table } from 'react-bootstrap';
const UserDetails = () => {

    let params =useParams();
    const [employee,setEmployee] = useState(Employees.Employees && Employees.Employees.find((user)=> user.employeeCode == params.userId));
    useEffect(()=>{
    },[params])
  return (
    <div>
        <h1 className='bg-primary'>UserDetails</h1>
        <Table   variant='dark'>
        <tbody>
            <tr>
                <th>userId</th>
                <th>jobTitleName</th>
                <th>firstName</th>
                <th>lastName</th>
                <th>region</th>
                <th>phoneNumber</th>
                <th>emailAddress</th>
            </tr>
            <tr>
                
                {employee ? 
                <>
                <td>{employee && employee.userId}</td>
                <td>{employee && employee.jobTitleName}</td>
                <td>{employee && employee.firstName}</td>
                <td>{employee && employee.lastName}</td>
                <td>{employee && employee.region}</td>
                <td>{employee && employee.phoneNumber}</td>
                <td>{employee && employee.emailAddress}</td>
                </>
                : <td colSpan="7">Not found</td>
                }
            </tr>
        </tbody>
        </Table>
    </div>
  )
}

export default UserDetails