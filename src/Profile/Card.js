import React from 'react';
import { useState } from 'react';


const Card = ({pod}) => {
  const sty={ color:"red"}
  const [show , setShow]=useState(false);
 const [count, setCount]=useState(0); 
 

 
  return (
 <div  className='product-card'>
   <div className='parti1'>
        <img src={pod.image} alt=''/>
        <button onClick={()=>setShow(!show)}>Show Profil </button>
    </div>
    {show ? (
     <div className='card-content'>
       <button onClick={()=>setShow(false)}>x</button>
       <h3>{pod.fullName}</h3>
      <img src={pod.bio} alt=''/>
        <h2 style={sty}> {pod.profession} </h2>
        
    </div> ):null}
    
    {show ?(
    <div>Number of seconds:{setInterval(setCount,1000)}</div> ):null}
    </div>
  )
}

export default Card