import React, { useRef } from "react";


export default function Addlist({handleadd}){
const  textareaReference =useRef(null);
    return<>
    <textarea  placeholder="write here"name="" ref={textareaReference}></textarea>
    <button onClick={()=>{handleadd(textareaReference.current.value)}}>Add</button>

    </>
}