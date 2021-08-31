import React from 'react'

const Card = ({ title }) => {
  return (
    <div className='card bordered'>
      <div className='card-body'>
        <h2 className='title'>{title}</h2>
        <p>[put text here]</p>
        <div className='card-actions'>
          <button className='btn btn-primary'>Get Started</button>
          <button className='btn btn-ghost'>More Info</button>
        </div>
      </div>
    </div>
  )
}

export default Card
