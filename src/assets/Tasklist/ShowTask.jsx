import React from 'react'

const ShowTask = ({data,setData}) => {
  const handleDelete=(id)=>{
    setData(data.filter((val)=>val.id!==id))
  }
  return (
    <div>
     {data.map((val)=>{
      return(
        <>
        <li>{val.id}</li>
        <li>{val.name}</li>
        <button onClick={()=>handleDelete(val.id)}>delete</button>
        </>
      )
     })}
    </div>
  )
}

export default ShowTask