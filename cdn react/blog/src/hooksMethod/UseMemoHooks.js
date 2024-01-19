import { useMemo, useState } from "react"

const UseMemoHooks =()=>{

    let [count , setCount] =   useState(0);
    let [data,setData]= useState(1);

    const useMemoGetData= useMemo( ()=> {
        console.warn("checking memo");
        return data*10
      },[data])
;
    return (
        <>
            <h1>Hello use memo</h1>
            <h2>count: {count}</h2>
            <h2>data: {useMemoGetData}</h2>

            <button className="btn btn-primary" onClick={()=>setCount(count+1)}>Count</button>
            <button className="btn btn-primary" onClick={()=>setData(data+1)}>Data</button>
        </>
    )
}

export default UseMemoHooks