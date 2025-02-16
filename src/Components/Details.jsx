import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Details() {
    let {id} =useParams()
    let [post, setPost] = useState(null);
    useEffect(() => {
        fetch(`https://wowally.com/wp-json/wp/v2/posts/${id}`)
            .then((res) => res.json())  
            .then((a) => setPost(a)); 
    }, [id]);
   

  return (
    <>
     <section className="container mx-auto py-5">
            <h2 className="text-3xl font-bold mb-4">{post.title.rendered}</h2>
            <div className="text-gray-700" dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
        </section>
    </>
  )
}

export default Details
