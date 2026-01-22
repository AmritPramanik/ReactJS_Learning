import { useState } from "react"

const App = () => {

  const [heading,setHeading] = useState('')
  const [details,setDetails] = useState('')
  const [task,setTask] = useState([])

  const submitHandler = (e)=>{
    e.preventDefault()

    if (!heading.trim() || !details.trim()) return;
    
    const newtask = [...task]
    newtask.push({heading,details})
    setTask(newtask)

    setDetails('')
    setHeading('')
  }

  const deletNode = (index)=>{
    setTask(task.filter((_,i)=> i !== index))
  }

  return (
    <div className="min-h-screen lg:h-screen lg:flex bg-black text-white">
      <form className="flex flex-col items-center lg:w-1/2 p-10 gap-3 lg:border-r-6" onSubmit={e=>{submitHandler(e)}}>
        <h1 className="font-bold text-4xl mb-7">Add Your Notes</h1>
          <input onChange={(e)=>setHeading(e.target.value)} value={heading} type="text" placeholder="Enter Notes Heading" className="px-6 py-3 w-full outline-none border-2 font-medium rounded text-[20px]"/>
          <textarea onChange={(e)=>setDetails(e.target.value)} value={details} type="text" placeholder="Enter Details" className="px-6 py-3 min-h-35 max-h-[50vh] w-full border-2 outline-none font-medium rounded"/>
          <button className="px-6 py-2.5 w-full font-semibold bg-white outline-none text-black rounded text-[18px] cursor-pointer">Add Note</button>
      </form>
      <div className="p-10 flex flex-col lg:w-1/2 ">
        <h1 className="font-bold text-4xl text-center">Recent Notes</h1>
        <div className="flex flex-wrap gap-5  justify-center mt-10 md:justify-start lg:justify-start overflow-auto  no-scrollbar">
          {
            task.map((value,index)=>(
              <div key={index} className=" flex flex-col justify-between h-52 w-44 p-4 bg-cover text-black rounded-xl bg-[url(https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png)]">
                <div className="mt-5">
                  <h3 className="leading-tight font-bold text-xl">{value.heading}</h3>
                  <p className="mt-3 leading-tight font-semibold text-gray-600 ">{value.details}</p>
                </div>
                <button onClick={()=>{deletNode(index)}} className="bg-red-600 text-white font-bold py-1.5 rounded">Delet</button>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default App
