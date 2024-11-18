import React from 'react'
import starkpic from '../assets/stark.jpg';
import './userCard.css';
const UserCard = (props) => {
  return (
    <div className='user-container'>
      <p id='user-name'>{props.name}</p>
      <img id='user-image' src={starkpic} alt='vinni'></img>
      <p id='user-desc'>{props.desc}</p>
    </div>
  )
}

export default UserCard
