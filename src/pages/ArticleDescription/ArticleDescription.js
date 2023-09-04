import React from 'react'
import Description from '../../models/Description/Description'
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { API } from '../../constants'
function ArticleDescription() {
  const [desc,setDesc]=useState(null)
  const { id:Aid } = useParams();
  useEffect(()=>{
    fetch(`${API}/descriptions?populate=*`).then((res) => res.json())
    .then((desc)=>{
      const id=desc.data.findIndex((desc)=>desc.attributes.articleId===Aid)
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