import React from 'react'
import { Table } from "react-bootstrap"
import UsersDetails from './UsersDetails'
const TableData = () => {

    let Data = [
        {
            name: "radhe",
            email: "test1@gmail.com",
            moNo: "701254"
        },
        {
            name: "Dharam",
            email: "test1@gmail.com",
            moNo: "67896752"
        },
        {
            name: "Rahul",
            email: "test1@gmail.com",
            moNo: "54775"
        },
        {
            name: "Ankitr",
            email: "test1@gmail.com",
            moNo: "55685"
        },
    ]
    return (
        <div >

            <Table striped variant='dark' hover  >
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Mo-number</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Data.map( ( data, index ) => (
                            <tr key={index}>
                                <td>{data.name}</td>
                                <td>{data.email}</td>
                                <td>{data.moNo}</td>
                            </tr>
                        ) )
                    }

                </tbody>
            </Table>
            <Table striped variant='dark' hover  >
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Mo-number</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Array.from( { length: 3 } ).map( ( data, index ) => (
                            <tr key={index}>
                                {
                                    Array.from( { length: 4 } ).map( ( data, i ) => (
                                        <td key={i}>
                                            {i == 0 ? index + 1 : "hello"}
                                        </td>
                                    ) )
                                }
                            </tr>
                        ) )
                    }

                </tbody>
            </Table>

            <Table striped variant='primary' hover>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Mo-number</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Data.map( ( user, i ) => (
                            <UsersDetails key={i} user={user}></UsersDetails>
                        ) )
                    }
                </tbody>
            </Table>



        </div>
    )
}

export default TableData