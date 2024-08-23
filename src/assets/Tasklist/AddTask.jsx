import React, { useState } from "react";
const AddTask = ({setData}) => {
  const [task, setTask] = useState();
  const [progress, setProgress] = useState(false);
  const reset=()=>{
    setTask("")
    setProgress(false)
  }
const handleResetAll=()=>{
  setData([])
}
  const handleSubmit = (e) => {
    e.preventDefault()
    const inputData={
      id:Math.floor(Math.random()*10000),
      name:task,
      completed:Boolean(progress),
    }
    setData((prev)=>[...prev,inputData])
  
    reset()

  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="task">Task</label>
        <input
          onChange={(e)=>setTask(e.target.value)}
          type="text"
          name="task"
          id="task"
          placeholder="enter task"
          value={task}
        />
        <select onChange={(e)=>setProgress(e.target.value)} value={progress} >
          <option value="true">Pending</option>
          <option value="false">Completed</option>
        </select>
        <button>Add task</button>
        <span onClick={handleResetAll}>clear all </span>
      </form>
    </div>
  );
};

export default AddTask;
