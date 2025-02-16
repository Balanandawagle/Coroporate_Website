import React, { useEffect, useState } from 'react'
import { CiFacebook, CiPhone } from "react-icons/ci";
import { FaInstagram } from 'react-icons/fa';
import { FiMenu, FiX } from 'react-icons/fi';
import { LuGithub } from 'react-icons/lu';
import { PiAddressBookThin } from "react-icons/pi";
import { Link, Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home';
import Category from './Category';
import Details from './Details';

function Header() {
    let[menuOpen, setMenuOpen]=useState()
    let [cat,setCat] = useState([])
    useEffect(()=>{
        fetch('https://wowally.com/wp-json/wp/v2/categories').then(res=>res.json()).then(a=>setCat(a))
    },[]) 
  return (
    <>
      <section className='py-3 border-b'>
        <div className='container mx-auto px-5'>
            <div className="flex flex-wrap justify-between items-center">
            <ul className='flex flex-wrap items-center text-sm text-gray-700 gap-5 px-5'>
                <li className='flex items-center '><CiPhone className='text-lg' />+977-986354325 </li>
                <li className='flex items-center'><PiAddressBookThin  className='text-lg' />Park Ave S, New York, NY 10003</li>
            </ul> 

            <ul className="hidden lg:flex flex-wrap items-center text-gray-700 gap-5">
            <li className="text-lg cursor-pointer hover:text-blue-600"><CiFacebook /></li>
            <li className="text-lg cursor-pointer hover:text-pink-500"><FaInstagram /></li>
            <li className="text-lg cursor-pointer hover:text-gray-900"><LuGithub /></li>
          </ul>
        </div>
        </div>
      </section>

      <header className='py-3 sticky top-0 z-20 bg-white shadow-lg'>
        <div className="container mx-auto px-5 flex justify-between items-center">
           <Link to={'/'}> <h2 className='text-3xl font-bold'>Bala's Coporate</h2></Link>
            <button className='lg:hidden text-2xl' onClick={()=>setMenuOpen(!menuOpen)}>
                {menuOpen ? <FiX/> : <FiMenu/>}
            </button>
            <nav className={`absolute lg:static top-16 left-0 w-full bg-white lg:bg-transparent lg:w-auto transition-all ${menuOpen ? "block" : "hidden"} lg:flex`}>
            <ul className="flex flex-col lg:flex-row gap-5 uppercase text-gray-700 p-5 lg:p-0">
            <Link to={'/'}>           
            <li className="cursor-pointer hover:text-blue-500 transition-all">Home</li>
            </Link>
              {cat.slice(0,5).map((a) => (
                 <Link to={`/cat/${a.id}`} key={a.id}>
                <li key={a.id} className="cursor-pointer hover:text-blue-500 transition-all">
                  {a.name}
                </li>
                </Link>
              ))}
            </ul>
          </nav>
        </div>
      </header>
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cat/:id' element={<Category/>}/> 
        <Route path='/detail/:id' element={<Details/>}/> 
      </Routes>
    </>
  )
}

export default Header
