import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Footer() {
     let [cat,setCat] = useState([])
        useEffect(()=>{
            fetch('https://wowally.com/wp-json/wp/v2/categories').then(res=>res.json()).then(a=>setCat(a))
        },[]) 
  return (
    <>
     <footer class="bg-gray-900  shadow-sm dark:bg-gray-900">
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
             <Link to={'/'}>
                               <h2 className='font-bold text-white uppercase flex text-2xl hover:text-blue-700 transition-all duration-300 '>Bala's Cooperate</h2>
                           </Link>
                          
            <ul class="flex flex-wrap gap-5 items-center mb-6 text-sm font-medium text-white sm:mb-0 dark:text-gray-400">
                
                    
                   {cat.slice(0,5).map((a) => (
                                    <Link to={`/cat/${a.id}`} key={a.id}>
                                   <li key={a.id} className="cursor-pointer uppercase hover:text-blue-500 transition-all">
                                     {a.name}
                                   </li>
                                   </Link>
                                 ))}
            </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <Link to={"/"} class="hover:underline">BalanandaW</Link>. All Rights Reserved.</span>
    </div>
</footer>
    </>
  )
}

export default Footer
