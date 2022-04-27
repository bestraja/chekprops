import React from 'react'
import Card from './Card'

const Profile = ({cardport}) => {
    
  return (
    <div className='list'>
     { cardport.map((el)=>( <Card pod={el}   />))}
       
    </div>
  )
}

export default Profile