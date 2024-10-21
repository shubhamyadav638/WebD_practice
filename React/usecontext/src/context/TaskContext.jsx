import { createContext,useState}  from "react";


const taskContext= createContext()

export const Taskprovider=({children})=>{
    const [task,setTask]=useState([])
    const addTask=(task)=>{
        setTask([...task,task])
    }  

}
const removeTask=(task)=>{
    setTask(task.filter())
}
return (
    <Taskprovider value={{task,addTask,removeTask}}>
        {children}
    </Taskprovider>
        
)
