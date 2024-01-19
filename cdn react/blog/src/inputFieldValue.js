import { useState } from "react"
function GetInputValue(){
 let [inputValue,setInputValue]=useState(null);
 let [showInput,setInput]=useState(false)

 function fn(e){
console.log(e.target.value);
setInputValue(e.target.value);
setInput(false)

 }
    return(
        <div>
            <hr/>
            <h1>Input value </h1>
           { inputValue ? <h1>Name - {inputValue}</h1> : null}
           { showInput ? <h1>Show Name - {inputValue}</h1> : null}
            <label>Enter your name</label>
            <input style={{padding:'10px', margin:'10px'}} type="text" placeholder="name"
            onChange={fn}
            />
            <button onClick={(e)=>setInput(true)}> Get Input Value </button>
        </div>
    )
}
export default GetInputValue