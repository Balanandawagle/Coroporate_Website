import React, {useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function Category() {
    let {id} = useParams()
    let[cat,setCat]=useState([])
    useEffect(()=>{
        fetch(`https://wowally.com/wp-json/wp/v2/posts?categories=${id}`)
            .then(res => res.json())
            .then(a => setCat(a));
    }, [id]);
    if (cat.length ===0) {
        return <div>Loading...</div>;
    }
  return (
    <>
    <section className="container mx-auto py-5">
    <div className="flex flex-wrap gap-5 justify-center">
        {cat.slice(0,6).map((a) => (
            <div 
                key={a.id} 
                className="w-full sm:w-[48%] lg:w-[30%] p-6 bg-gray-200 rounded-lg shadow-lg transition-transform transform  hover:shadow-xl hover:bg-gray-300"
            >
                <img 
                    src="https://innhtml.payo-themes.com/images/p03.jpg" 
                    alt="" 
                    className="w-full h-[200px] object-cover rounded-lg mb-4"
                />
                <h2 className="text-2xl font-semibold mb-2">{a.title.rendered}</h2>
                <div 
                    className="text-gray-700"
                    dangerouslySetInnerHTML={{ __html: a.excerpt.rendered }}
                />
                <Link to={`/detail/${a.id}`}>
                <button className= ' mt-5 bg-red-500 px-6 py-3 rounded-lg text-white hover:bg-red-900 transition'> Read More</button>
                </Link>
            </div>
        ))}
    </div>
</section>
         
        
    </>
  )
}

export default Category
