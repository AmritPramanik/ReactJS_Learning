import React from 'react'
import { useState } from 'react'

const App = () => {

  // array handling :
    const [arr,setArr] = useState([10,20,30,40]);

    const changeArr = ()=>{
      const newArr = [...arr]
      newArr.push(50)
      setArr(newArr)
    }

    // object handling :
    const [obj,setObj] = useState({name:"Amrit Pramanik",age : 21,});

    const changeName = ()=>{
      const newObj = {...obj}
      newObj.name = "Deep Pramanik"
      setObj(newObj)
    }

    // batch update
    const [num,setNum] = useState(10)
    const batchUpdate = ()=>{
      // initialy it looks like it update by 3 but it's not it only add 1
      // setNum(num+1)
      // setNum(num+1)
      // setNum(num+1)

      // so we do
      setNum(pre => pre+1)
      setNum(pre => pre+1)
      setNum(pre => pre+1)
    }

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "20px",
      marginTop:"20vh"
    }}>
      <h1 style={{fontSize:"100px"}}>{arr}</h1>
      <h1>{obj.name},{obj.age}</h1>
      <h1>{num}</h1>

      {/* two different way to handel array */}
      <div style={{ display: "flex",gap:"20px"}}>
        <button onClick={changeArr}>Add 50</button>
        <button onClick={() => setArr(pre => [...pre,99])}>Add 99</button> {/*This is mostly used */}
      </div>

      {/* two different way to handel object */}
      <div style={{ display: "flex",gap:"20px"}}>
        <button onClick={changeName}>Change name</button>
        <button onClick={() => setObj(pre => ({...pre,age:22}))}>Change age</button> {/*This is mostly used */}
      </div>

      <button onClick={batchUpdate}>Add by 3</button>
    </div>
  )
}

export default App
