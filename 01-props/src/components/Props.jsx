import React from 'react'

const Props = (props) => {
  return (
    <div className='innerBox'>
      <h1>{props.name}</h1>
      <h3>Department : {props.dpt}</h3>
      <h3>Score : {props.score}</h3>
      <p>Frontend Developer & ML</p>
    </div>
  )
}

export default Props

