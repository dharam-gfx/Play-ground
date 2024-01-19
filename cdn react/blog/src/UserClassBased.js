import React, {Component} from 'react';

class UserClassApp extends Component{

    render(){
        return (
            <div>
            <h1>Hello World Class </h1>
            <button onClick={()=>AlertMe("Dharam")}>Click me lass</button>
            </div>
        )
    }
}

function AlertMe(name){
    alert("Welcome to the-  " + name);
}

export default UserClassApp;