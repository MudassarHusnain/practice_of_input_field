import React,{useState} from 'react'

function Input()
{
  const [data,setData]=useState(null)
  const [print,setPrint]=useState(false)
  const [status,setStatus]=useState(true)
  function getData(val){
     setData(val.target.value)
    //  console.log(val.target.value)
     setPrint(false)
  }
  return(
    <div>
    <h1>{
        print?
        data
        :null}</h1>
     <input type="text" onChange={getData}/>
     <button onClick={()=>setPrint(true)}>print</button>
     <h2>{status?
        "This practice of hide and show functionality in react js"
        :null}</h2>
     <button onClick={()=>setStatus(false)}>Hide</button>
     <button onClick={()=>setStatus(true)}>Show</button>
     <br/>
     <button onClick={()=>setStatus(!status)}>Toggle</button>
    </div>
  );

}

export default Input