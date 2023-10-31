import React, {useEffect, useState} from 'react'


function Pizza() {
    let [Recipes,setRecipes] = useState([]);
    
    const getRecipes = async ()=>{
        let reponse = await fetch("https://forkify-api.herokuapp.com/api/search?q=pizza");
        let data = await reponse.json();
        setRecipes(data);
    }
        useEffect(() =>{
        getRecipes();
        },[])
        
    return(
    <>
    <div className='row pizza'>
    {
        Recipes.map((ele)=>{
            return <div className='col-md-4' key={ele.id}>
                <h2>{ele.title}</h2>
                <img src={ele.image} className='w-100'/>
            </div>
    
        } )}
    </div>

    </>
  )
}

export default Pizza