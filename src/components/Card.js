import React from 'react'

export const Card = () => {
  return (
    <div className='card lg:card-side bordered'>
      <div className='card-body'>
        <h2 className='title'>[put title of card here]</h2>
        <p>[put text here]</p>
        <div className='card-actions'>
          <button className='btn btn-primary'>Get Started</button>
          <button className='btn btn-ghost'>More Info</button>
        </div>
      </div>
    </div>
  )
}
