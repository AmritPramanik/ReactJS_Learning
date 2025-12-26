import React from 'react'
import Props from './components/props'

const App = () => {
  return (
    <div className='card'>
      <Props name="Amrit Pramanik" dpt="CSDS" score={7.35}/>
      <Props name="Sohan Samanta" dpt="AIML" score={7.5}/>
    </div>
  )
}

export default App
