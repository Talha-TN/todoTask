import React, { useState } from "react";
import ShowTask from "./ShowTask";
import AddTask from "./AddTask";
const TaskInitialData = () => {
  const [data, setData] = useState([]);
  return (
    <div>
      <AddTask  data={data} setData={setData}/>
      <ShowTask data={data} setData={setData} />
    </div>
  );
};

export default TaskInitialData;
