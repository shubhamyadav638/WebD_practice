import { useState } from "react";
import { Taskprovider } from "../context/TaskContext";
import { useContext } from "react";

const TaskInput=()=>{
    useContext()

    const [task,setTask]=useState("")


const handlesubmit=(event)=>{
    event.preventDefault();
    

}

  return (
<form onSubmit={handlesubmit}>
    <input type="text" value={task} onChange={event.target} />
    <button>Add</button>
</form>
  )
}

export default TaskInput
