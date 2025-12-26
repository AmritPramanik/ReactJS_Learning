import React from 'react'

const Props = (props) => {
  return (
    <div className='innerBox'>
      <h1>{props.name}</h1>
      <h3>Department : {props.dpt}</h3>
      <h3>Score : {props.score}</h3>
      <h4>Frontend Developer & ML</h4>
    </div>
  )
}

export default Props

