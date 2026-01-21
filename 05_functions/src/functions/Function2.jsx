import React from 'react'

const Function2 = () => {

  const printEmail = (value) =>{
    console.log(value)
  }
  
  return (
    <div className='inputSection'>
      <input onChange={(e)=>{
        console.log(e.target.value)
      }} type="text" placeholder='Full Name' />
      <input onChange={(e)=>printEmail(e.target.value)} type="email" placeholder='Email Address' />
    </div>
  )
}

export default Function2
