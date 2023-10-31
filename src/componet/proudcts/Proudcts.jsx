import React, {useEffect, useState} from 'react'

function Proudcts() {

    let [proudcts,setProudcts] = useState([]);
    
    const getProudcts = async ()=>{
        let reponse = await fetch("https://fakestoreapi.com/products");
        let data = await reponse.json();
        setProudcts(data);
    }
        useEffect(() =>{
        getProudcts();
        },[])
        
    return(
    <>
<div className='row'>
    {
        proudcts.map((ele)=>{
            return <div className='col-md-4' key={ele.id}>
                <h2>{ele.title}</h2>
                <img src={ele.image} className='w-100'/>
            </div>
    
        } )}
</div>

    </>
  )
}

export default Proudcts