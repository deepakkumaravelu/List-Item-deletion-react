import React,{useState} from 'react'
const items=[
    {id:0,Name:"Leo"},
    {id:1,Name:"Vikram"},
    {id:2,Name:"kaithi"},
    {id:4,Name:"Master"},
]
const Deletablelist = () => {
    const[item,setitems]=useState(items);
  return (
    <div>
    <center>
        <h1>Deletable List</h1></center>
        <ul>
            {item.map(item1=><li key={item1.id}>{item1.Name}
            <button onClick={()=>setitems(item.filter(it=>it.id!==item1.id))}>Delete</button></li>)}
        </ul>
    </div>
  )
}

export default Deletablelist