import { useState } from "react"
function Child(props){
let [name,setName]=useState("Dharmendra kumar");
// callBack(name);
// console.log(props);
setTimeout(()=>{
    props.callBack(name);
},5000)

    return(
        <div>
            <h1> Child </h1>
        </div>
    )
}
export default Child