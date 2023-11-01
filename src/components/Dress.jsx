import React,{useState} from 'react'
import { toast} from 'react-toastify';


function Dress() {
  const [dress, setDress]=useState(0);
    
  const add=()=>{
      if(dress>=10)
  {
      toast.dark("you cannot enter more than 10")
  //setDress((dress)+1);
  setDress(10)

  }
  else{
      setDress(dress+1);
  }
 //setDress(dress+1)
 
  }

  const subtract=()=>{
      if(dress<=10)
      {
          toast.dark("you cannot enter less than 0")
      //setDress((dress)-1);
      setDress(0)
  
      }
      else{
          setDress(dress-1);
      }
    //  setDress(dress-1)

    }
  return (
    <div>
       <div class="container1">
    
      

   
<div class="xzoom-container">
<img src= "https://sareeswala.com/wp-content/uploads/2022/08/Long-Designer-Pakistani-Dress-For-Engagement-Pakistani-Suits-1.jpeg"
width={"450px"} height={"600px"}/>

</div>
       

<div class="description">
<h2>Fabrics 3 Piece Suit</h2>
<small style={{color:'darkslategrey'}}>Printed Embroidered Light Khaddar | Top Bottoms Dupatta</small>
<p><del>Rs 5,999</del>&nbsp; &nbsp;<ins style={{color:'red'}}>Rs 2,995</ins> </p>
<br/>
<small  style={{color:'darkslategrey'}}>Availability: <i style={{color:'green'}}>In stock</i></small>
<br/>
<small style={{color:'darkslategrey'}}>SKU: BLK22420</small>
<br/><br/>
&nbsp;&nbsp;&nbsp;&nbsp;
<div className='d-flex'>
      <button className='btn btn-danger' onClick={add}>+</button>
      <button className='btn btn-primary' onClick={subtract}>-</button>
    </div>

<br/><br/><br/>
   
<emb style={{color:'darkslategrey'}}>Details</emb>
<hr/>
<br/>
<emb style={{color:'darkslategrey'}}>Top Fabric: </emb><small> Yarn Dyed Cotton Jacquard | 3m</small>
<br/>
<emb style={{color:'darkslategrey'}}>Bottom Fabric: </emb><small> Dyed Cambric | 2.5m</small>
<br/>
<emb style={{color:'darkslategrey'}}>Dupatta Fabric: </emb><small> Digital Printed Mixed Chiffon | 2.5m</small>
<br/>
<emb style={{color:'darkslategrey'}}>Technique: </emb><small> Yarn Dyed</small>
<br/>
<emb style={{color:'darkslategrey'}}>Fabric Content: </emb><small> 80% Cotton | 20% Polyester</small>
<br/>
<emb style={{color:'darkslategrey'}}>Description: </emb><small> Signature Yarn Dyed Top Bottoms Dupatta</small>
<br/>

</div>
<br/>
    </div>
    </div>
  )
}

export default Dress
