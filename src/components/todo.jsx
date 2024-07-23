import React, { useEffect, useReducer} from "react";



export default function Todo ({item,handle_delete}){
const[data,dispatch] =useReducer(control,item);
let textare_id =item.id+"text_id";
let content_id =item.id+"content_id";
useEffect(() => {
    document.getElementById(item.id).style.backgroundColor = item.done ? 'green' : 'red';
  }, [item.done]);
    


function control(data, action) {
    switch (action.opr) {
      case 'done':
        item.done =!data.done;
        return { ...data, done: !data.done };

      case 'handle_text_input':
        item.content =action.event.target.value;

        return { ...data, content: action.event.target.value };
      case 'handle_edit':
        handle_edit();
        return data;
      default:
        return data;
    }
  }
  function handle_edit() {
    // Toggle visibility of content and textarea
    const contentElem = document.getElementById(content_id);
    const textareaElem = document.getElementById(textare_id);

    if (contentElem && textareaElem) {
      contentElem.style.display = "none";
      textareaElem.style.display = "inline";
    }
  }
function handle_mouseleave(e){
    e.target.style.display='none';
    document.getElementById(content_id).style.display='inline';

}
let handledelete = ()=>{
  handle_delete(item.id);
}



return <div className="todolist" >
  <button className="done_button"    id= {item.id} onClick={()=>dispatch({opr:"done"})} ></button><span id={content_id}>{item.content}</span>
     
<textarea hidden onMouseOut={(e)=>handle_mouseleave(e)}onChange ={(e)=>dispatch({opr:'handle_text_input',event:e})}name="" id={textare_id}>{data.content}</textarea>
   <button onClick={()=>handle_edit()}>edit </button> 
  <button onClick={handledelete}>Delete</button>
</div>

}