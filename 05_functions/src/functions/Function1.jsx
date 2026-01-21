
const Function1 = () => {
  // we create function in two wayes :
  //    1. we create the function call by eventlistner
  //    2  we create the function in eventlistner

  // 1. 
  const printMyName = ()=>{
    console.log("My name is Amrit Pramanik")
  }

  const printMyName1 = ()=>{
    console.log("My name is Sohan Samanta")
  }


  return (
    <div>
      {/* onClick={printMyName()} not use because it already called once with out clicking */}
      <button onClick={printMyName}>Click Me</button>

      {/* We write like this printMyName() by creating function */}
      {/* We use this for when we pass the parametar or directly create a function here */}
      <button onClick={()=>printMyName1()}>Press Me</button>

      {/* 2. */}
      <button onClick={()=>{
        console.log("My name is Joydeep Das")
      }}>Punch Me</button>
    </div>
  )
}

export default Function1
