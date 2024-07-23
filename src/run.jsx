import React, { useState } from "react";





 export default function Count(){
    const [c,sc] =useState('start');
const [v,sv] =useState(88);
    let control =()=>{
        sc(x=>{
            let y=x;
            y= (y=='start')?'stop' :'start';
            return y;
        })
        if(x=='stop'){
            let tim =document.setInterval(() => {
                sv(x=>{
                    let y =x+1;
                    return y;

                }
            )
              return ()=>{
                clearInterval(tim);
              }  
            }, 1);
        }
    }







    return <>
    <h1>vjjjj</h1>
    <button onClick={()=>{control}}>{s}</button>
    </>
}