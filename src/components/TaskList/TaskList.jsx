import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";

export default function TaskList({data}){
    console.log(data.tasks)
    return(
        <>
        
        <div id='taskList' className="w-full p-3 flex justify-start overflow-auto">
            <div className="w-max flex space-x-3 mt-24">
            {data.tasks.map((task,idx)=>{
            if (task.active){
                return <AcceptTask key={idx} data={task}/>
            }
            if (task.newTask){
                return <NewTask key={idx} data={task}/>
            }
            if (task.completed){
                return <CompleteTask key={idx} data={task}/>
            }
            if (task.failed){
               return <FailedTask key={idx} data={task}/>
            }
        })}
            </div>
        </div>
        </>
    )
}