import React from 'react'

const Card = () => {
  return (
    <div className='card lg:card-side bordered'>
      <div className='card-body'>
        <h2 className='title'>No Images</h2>
        <p>[put text here]</p>
        <div className='card-actions'>
          <button className='btn btn-primary'>Get Started</button>
          <button className='btn btn-ghost'>More Info</button>
        </div>
      </div>
    </div>
  )
}
