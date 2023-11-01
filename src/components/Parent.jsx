import React,{useState} from 'react'
import Child1 from './Child1'
import Child2 from './Child2'
import Child3 from './Child3'


function Parent() {
    const[data,setData]=useState(50);
    const add=()=>{
        return 3+2; 
    }
  return (

    <div>
      <Child1/>
      <Child2/>
      <Child3/>
    </div>
  )
}

export default Parent
