import React, { useEffect } from 'react';
import { useLocation,useSearchParams } from 'react-router-dom';


const About = () => {
 let location = useLocation();
 let [searchp,setSearchP] = useSearchParams();
 let age = searchp.get("age");
 console.log(location);
 console.log(location.search);

 useEffect(()=>{
  // setSearchP({age:age, name:"cxv"})
 },[])
  return (
    <div>About</div>
  )
}

export default About