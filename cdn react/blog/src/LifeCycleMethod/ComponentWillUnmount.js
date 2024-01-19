import React from "react";
class ComponentWillUnmount extends React.Component{
 constructor(){
    super()
 }

 componentWillUnmount(){
    console.log("ComponentWillUnmount");
 }

 render(){
    return(
        <h1>ComponentWillUnmount </h1>
    )
 }
}
export default ComponentWillUnmount