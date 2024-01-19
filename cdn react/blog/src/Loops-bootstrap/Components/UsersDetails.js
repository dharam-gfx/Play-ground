import React from 'react'

const UsersDetails = ( props ) => {
    return (
        <tr>
            {
                Object.keys( props.user ).map( ( key, value ) => (
                    <td key={value}>{props.user[key]}</td>
                ) )
            }
        </tr>
    )
}

export default UsersDetails