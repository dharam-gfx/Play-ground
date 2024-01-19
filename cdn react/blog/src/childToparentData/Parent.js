import { useState } from 'react'
import Child from '../childToparentData/Child'

function Parent(){
    let [name,setName] = useState("Dharam");
    const getChildName=(name)=>{
        setName(name);
    }
    return(
        <div>
            <hr />
            <h1> Parent </h1>
            <h2>Name:{name}</h2>
            <hr />
            <Child callBack={getChildName}></Child>
            <hr />
        </div>
    )
}
export default Parent