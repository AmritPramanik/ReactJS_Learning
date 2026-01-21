import React from 'react'

const Function3 = () => {

  const direction = (speed)=>{
    if(speed > 0){
      console.log("Going Stright")
    }
    else{
      console.log("Going Reverse")
    }
  }
  return (
    <div onWheel={(e)=>{
      direction(e.deltaY)
    }} className='page'>
      <div className='page1'></div>
      <div className="page2"></div>
      <div className="page3"></div>
    </div>
  )
}

export default Function3
