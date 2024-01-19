import { useState } from "react"
function HideShow(){
    let [hideShow,setHideShow]=useState(true);
    return(
        <div>
        < hr/>
        <h1> Hide show: { hideShow ? <b>Dharam</b> : null} </h1>

        <button onClick={()=>setHideShow(false)}> Hide </button >
         <button onClick={()=>setHideShow(true)}>show</button>

        </div>
    )
}
function HideShowToggle(){

let [toggleHideShow,setToggleHideShow]=useState(true);

    return(
        <div>
        < hr/>
        <h1>Hide show Toggle: { toggleHideShow ? <b>Dharam Kumar</b> : null} </h1>
        <button onClick={()=>setToggleHideShow(!toggleHideShow)}>Toggle hide show</button>
        </div>
    )
}
export  {HideShowToggle,HideShow}