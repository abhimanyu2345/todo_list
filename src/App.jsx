import React, { useEffect, useState } from "react";
import Todo from "./components/todo";
import Addlist from "./components/addlist";

export default function App(){
let [data,sdata] =useState([]);

useEffect(() =>{
    fetch('./todo.json')
    .then((k)=>(k.json()))
    .then((data)=>sdata(data.data))
    .catch((err)=>{console.error(err);console.log(err);})
},[])


const additem = (x) => {
    const nitem = { done: false, content: x, id: data.length };
    sdata([...data, nitem]);
  };

let handle_delete =(id)=>{
    const updatedItems = data.filter(item => item.id !== id);
    sdata(updatedItems);

}
return <>
<Addlist handleadd={additem} />
{data.map((x)=>(<Todo item={x} handle_delete={handle_delete} />))}
</>
}