import React from 'react'
import Card from './Card'

const Profile = ({cardport}) => {
    const show = (x)=>{alert(x);}
  return (
    <div className='list'>
     { cardport.map((el)=>( <Card pod={el} sh={show}  />))}
       
    </div>
  )
}

export default Profile