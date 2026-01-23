import React from 'react'

const App = () => {

  // localStorage have 4 property :
  //    1. setItem : set the items in key value pair
  //    2. getItem : get the value by key
  //    3. removeItem : remove single value by key
  //    4. clear : remove all stored value


  // setItem :
  const setItem = ()=>{
    // normal key value 
    localStorage.setItem("Name","Amrit Pramanik")
    localStorage.setItem("Age",21)

    // store the object 
    const user = {
      name:"Deep Pramanik",
      age : 21
    }
    localStorage.setItem("user",JSON.stringify(user))
  }

  //getItem:
  const getItem = ()=>{
  const value = localStorage.getItem("Name")
  const value2 = localStorage.getItem("Age")
  console.log(value)
  console.log(value2)

  const value3 = JSON.parse(localStorage.getItem("user"))
  console.log(value3)
  }


  // clear all items
  const clearAll = ()=>{
  localStorage.clear()
  }

  const removeAge = ()=>{
    localStorage.removeItem("Age")
  }
  const removeUser = ()=>{
    localStorage.removeItem("user")
  }

  return (
    <div style={{display:'flex', margin:'50px', gap:"20px" }}>
      <button onClick={setItem}>Set Item</button>
      <button onClick={getItem}>Get Item</button>
      <button onClick={clearAll}>Clear All</button>
      <button onClick={removeAge}>Remove Age</button> 
      <button onClick={removeUser}>Remove User</button> 
    </div>
  )
}

export default App
