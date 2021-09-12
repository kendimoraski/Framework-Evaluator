import React from 'react'

const Card = ({ title, name, number }) => {
  return (
    <div className='card bordered'>
      <div className='card-body'>
        <h2 className='title'>{title}</h2>
        <p>[put text here]</p>
        <div className='card-actions'>
          <button className='btn btn-primary'>{name}</button>
          <button className='btn btn-ghost'>{number}</button>
        </div>
      </div>
    </div>
  )
}

export default Card
