import { useState } from "react";

export default function Keyboard(){
    const [capslock,iscapslock] =useState(false);
    const [inputtext,setinputtext] =useState('');
    const [isshift,setisshift] =useState(false);
    const Elements =['~.`', '!.1', '@.2', '#.3', '$.4', '%.5',  
      '^.6', '&.7', '*.8', '(.9', ').0', '_.-', '+.=','Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '{_[', '}_]', '|_\\' ,
  'Caps Lock', 'a', 's', 'd', 'f', 'g', 'h',  
    'j', 'k', 'l', ':_;', `"_'`, 'Enter','Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 
                        '<_,', '>_.', '?_/', 'Shift'];

    const keypress =(key)=>{
        switch(key) {
            case "Caps Lock":
                handlecapslick();
                break;
            case "Shift":
                handleshift();
                break;
            case '<i className="fa-solid fa-delete-left"></i>':
               handledelte();
               break;
            case 'Tab':
              handletab();
              break;
            case 'Space':
              handlespace();
              break;
            case 'Enter':
              handlenter();
              break;
              
            default:
              handlekey(key);
              break;

        }

    }
    
  function handlespace(){
    setinputtext(inputtext+'\u00A0');

  }
  function handletab(){
    const k =inputtext+'\u00A0'+'\u00A0'+'\u00A0'+'\u00A0';
    setinputtext(k);

  }
  function handleshift(){
    setisshift(!isshift);
    
    
  } 
  function handledelte(){
  let content = inputtext.slice(0,inputtext.length-1);
 setinputtext(content);
 }
  
  function handlekey(key){
    let x = (!capslock)? key.toUpperCase():key.toLowerCase();
    
      if((x.includes('_')&&x!="_")){
        x = isshift ? x.split('_')[1]:x.split('_')[0]; 
    }
    else if(x.includes('.')&&x!="."){
       x= isshift ? x.split('.')[1]:x.split('.')[0]; 
    }
    
    setinputtext(inputtext+x);
  }
  function handlenter(){
    setinputtext(inputtext+ '\n');
  }
  function handlecapslick(){
    iscapslock(!capslock);

      Elements.forEach((Element)=>{
        
        if(!['Shift', 'Alt', 'Ctrl', 'Enter', 'Caps Lock', 'Tab','Delete'].includes(Element)){
          if(capslock){
            document.getElementById(Element).innerText = Element.toUpperCase().replace('.','');
          }
          else{
            document.getElementById(Element).innerText = Element.toLowerCase().replace('.','');

          }
        }
      })
    
    
    
    }
    
  




    return (








        
        <div id="keyboard">




            
          <div id="display">{inputtext}</div>
          <div  className="row">{['~.`', '!.1', '@.2', '#.3', '$.4', '%.5',  
                        '^.6', '&.7', '*.8', '(.9', ').0', '_.-', '+.=',  
                    '<i className="fa-solid fa-delete-left"></i>'].map((x)=>(<div className="keys" key={x} id={x} onClick={()=>keypress(x)}   >
                      {x.includes(".")? x.split('.').map((value,index)=>(<span key={index}>{value}</span>)):(x==='<i className="fa-solid fa-delete-left"></i>')?
                    <span className="fa-solid fa-delete-left">Delete</span>
                    :<span>{x}</span>
                    
                    }</div>)) }</div>





          <div className="row">
            {['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '{_[', '}_]', '|_\\'].map((x) => (
              <div className="keys" key={x}  id={x} onClick={() => {keypress(x)}}>
                {x.includes("_") ? x.split("_").map((value, index) => (
                  <span key={index}>{value}</span>
                )) : 
                  <span>{x}</span>
                }
              </div>
            ))}
          </div>





          <div className="row">
            {['Caps Lock', 'a', 's', 'd', 'f', 'g', 'h',  
                        'j', 'k', 'l', ':_;', `"_'`, 'Enter'].map((x) => (
              <div className="keys"  id={x} key={x} onClick={() => {keypress(x)}}>
                {x.includes("_") ? x.split("_").map((value, index) => (
                  <span key={index}>{value}</span>
                )) : (
                  <span>{x}</span>
                )}
              </div>
            ))}
          </div>
          <div className="row">
            {['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 
                        '<_,', '>_.', '?_/', 'Shift'].map((x) => (
              <div className="keys" key={x} id={x} onClick={() => {keypress(x)}}>
                {x.includes("_") ? x.split("_").map((value, index) => (
                  <span key={index}>{value}</span>
                )) : (
                  <span>{x}</span>
                )}
              </div>
            ))}
          </div>
            

          <div className="row">
            {['Ctrl', 'Alt', 'Space', 'Ctrl', 'Alt', '<', '>'].map((x) => (
              <div className="keys" key={x} onClick={() => {keypress(x)}}>
                {x.includes("_") ? x.split("_").map((value, index) => (
                  <span key={index}>{value}</span>
                )) : (
                  <span>{x}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      );
    }      