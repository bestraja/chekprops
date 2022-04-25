import React from 'react';



const Card = ({pod,sh}) => {
  const sty={ color:"red"}
  return (
    <div className='product-card'>
        <img src={pod.image} alt=''/>
     <div className='card-content'>
        <h2>Bio:{pod.bio}</h2>
        <h2 style={sty}> {pod.profession} </h2>
        <button onClick={()=>sh(pod.fullName)}>Click me </button>
    </div>
    
    </div>
  )
}

export default Card