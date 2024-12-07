import { useState } from "react"


function Todo() {
const [InputVal, setInputVal]= useState("");
const [Todo, setTodo] =useState([]);

function Createtodo(){
   if (InputVal) {
    setTodo((Todo)=>{
      const Updatetodo=[...Todo,InputVal]
      setInputVal('')
      return  Updatetodo;
  })
   }
}
function Delete (i){
  
  const NewARR = [...Todo] ;  
    NewARR.splice(i,1);
  setTodo(NewARR)

 }

 function Edit(i){
  if(InputVal){
     const editTodo=[...Todo]
   
  editTodo[i]=InputVal;
  setTodo(editTodo)
  }
 
 }


  return (<>
  <div className="bg-[url('./todo2.jpg')] bg-cover bg-center bg-no-repeat py-20  min-h-screen w-full absolute top-0">
 <div className='min-h-full w-full bg-black opacity-60 absolute top-0 left-0 '></div>

  <div className="w-[30%] bg-white h-auto  shadow-lg p-6  rounded-xl relative left-1/2  -translate-x-1/2 ">
    <div className="flex gap-4 items-center m-auto text-center pt-6 mx-4 ">
    <input 
    value={InputVal}
    placeholder="add task..."
    onChange={(e)=>setInputVal(e.target.value)}
        type="text"
        className="w-60 rounded-xl p-2 outline-none border " />
        
        <button onClick={Createtodo} className="  p-1 bg-lime-500 text-white font-bold rounded-lg border-none outline-none">Create Task</button>
        </div> <br />
        
       <div> 
       {Todo.map((data, i)=>{
           return <div key={i} className="flex mt-2 ml-5">
            <div className="w-52 bg-white  rounded-lg p-1">{data} </div> <button onClick={()=>Delete(i)} className="  p-1 bg-red-700 text-white ml-8 font-semibold rounded-lg">Delete</button>  &nbsp;
            <button onClick={()=>Edit(i)}  className="  p-1 px-2 bg-lime-500 text-white font-bold rounded-lg">Edit</button></div>
        })}
       </div>
       </div> 
       </div> 
        </>
  )
    
}

export default Todo
