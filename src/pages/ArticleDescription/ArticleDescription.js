import React from 'react'
import Description from '../../models/Description/Description'
import { useState,useEffect } from 'react'
function ArticleDescription() {
  const [desc,setDesc]=useState(null)
  useEffect(()=>{
    fetch("http://localhost:1337/api/descriptions?populate=*").then((res) => res.json())
    .then((desc)=>{
      const id=desc.data.findIndex((desc)=>desc.attributes.articleId===localStorage.getItem("article"))
      setDesc(desc.data[id].attributes)
    }
    )
  },[])
  return <>
    {
      desc?<Description 
      {...desc}
     />:
     <p>loading</p>
    }
    
    </>
}

export default ArticleDescription