import { useEffect, useRef, useState } from "react";
export default function Counter(){
 
  
  
const [c,sc] =useState('start');
  const [v,sv] =useState(0);
  let x = useRef(null);

      let control =()=>{
          sc(x=>{
              let y=x;
              y= (y=='start')?'stop' :'start';
              return y;
          })
        
            x.current = setInterval(()=>{
              sv(v=>v+1);

            },1000)
          
          if(c==='start'){
            clearInterval(x.current)}
          
          
      }
  
      return <>
      <h1>{v}</h1>
      <button onClick={control}>{c}</button>
      </>

}