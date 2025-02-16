import React, { useEffect, useState } from 'react'
import logo from '../assets/backgd.jpg'
import { Link } from 'react-router-dom'
import { FaNewspaper, FaLaptopCode, FaCamera, FaShoppingCart, FaGlobe } from "react-icons/fa";
import { FaFacebook, FaGithub, FaInstagram } from 'react-icons/fa';
let customIcons = [FaNewspaper, FaLaptopCode, FaCamera, FaShoppingCart, FaGlobe];
function Home() {
    let [post, setPost] = useState([])
    useEffect(() => {
        fetch('https://wowally.com/wp-json/wp/v2/posts').then(res => res.json()).then(a => setPost(a))
    }, [])
    const items = [
        {
            id: 1,
            title: 'Modern & flexible',
            icon: '🏠',  
            description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College  ',

        },
        {
            id: 2,
            title: 'Modern & flexible',
            icon: '📖',
            description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College  ',

        },
        {
            id: 3,
            title: 'Modern & flexible',
            icon: '💼',  
            description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College ',

        },
        {
            id: 4,
            title: 'Modern & flexible',
            icon: '🖼️',
            description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College  ',

        },
        {
            id: 5,
            title: 'Modern & flexible',
            icon: '👨‍👩‍👧‍👦',  
            description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College  ',

        },
        {
            id: 6,
            title: 'Modern & flexible',
            icon: '💰', 
            description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College ',

        },
    ];
    let teamMembers = [
        {
          id: 1,
          name: 'John Doe',
          image: 'https://innhtml.payo-themes.com/images/lawn-team01.jpg',  
          position: 'Frontend Developer', 
          socialLinks: {
            facebook: 'https://facebook.com/johndoe',
            github: 'https://github.com/johndoe',
            instagram: 'https://instagram.com/johndoe',
          },
        },
        {
          id: 2,
          name: 'Jane Smith',
          image: 'https://innhtml.payo-themes.com/images/lawn-team02.jpg', 
          position: 'Frontend Developer', 
          socialLinks: {
            facebook: 'https://facebook.com/janesmith',
            github: 'https://github.com/janesmith',
            instagram: 'https://instagram.com/janesmith',
          },
        },
        {
            id: 3,
            name: 'Jane Smith',
            image: 'https://innhtml.payo-themes.com/images/lawn-team03.jpg', 
            position: 'Frontend Developer', 
            socialLinks: {
              facebook: 'https://facebook.com/janesmith',
              github: 'https://github.com/janesmith',
              instagram: 'https://instagram.com/janesmith',
            },
          },
          {
            id: 4,
            name: 'Jane Smith',
            image: 'https://innhtml.payo-themes.com/images/lawn-team04.jpg',
            position: 'Frontend Developer', 
            socialLinks: {
              facebook: 'https://facebook.com/janesmith',
              github: 'https://github.com/janesmith',
              instagram: 'https://instagram.com/janesmith',
            },
          },
      ];
    return (
        <>
            <section className=' py-3 w-full h-[500px] relative  text-white pl-20'>
                <img src={logo} className='absolute top-0 left-0 w-full h-full object-cover' alt="" />
                <div className='absolute inset-0 bg-black/50'></div>

                <div className=' absolute top-1/2 -translate-y-1/2 mx-5'>
                    <h1 className='text-4xl font-bold py-4'>Better Design Experiences
                        <br /> On Any Devices</h1>
                    <button className='bg-blue-800 px-6 py-3 rounded-lg text-white hover:bg-blue-900 transition'> Get Started</button>
                </div>
            </section>

            <section className='py-[5rem] flex justify-center'>
                <div className='text-center w-full px-5 space-y-4'>
                    <p className='text-gray-500'>BRANDING LOGO COMPANY</p>
                    <h2 className='font-bold text-3xl'>We Craft Experiences
                        <br /> With little help from the best</h2>
                </div>
            </section>

            <section className='container mx-auto py-3'>
                <div className='flex justify-center flex-wrap gap-5'>
                    {items.map((a) => (
                        <div key={a.id} className='lg:w-[30%] p-6 bg-gray-200  rounded-lg shadow-lg hover:bg-gray-400 transition duration-300'>
                            <div className='text-4xl'>{a.icon}</div>
                            <h2 className='text-3xl mt-4'>{a.title}</h2>
                            <p className='mt-4'> {a.description}</p>
                        </div>
                    ))}

                </div>
            </section>

            <section className='py-[5rem] flex justify-center'>
                <div className='text-center w-full px-5 space-y-4'>
                    <p className='text-gray-500'>LATEST POST</p>
                    <h2 className='font-bold text-3xl'>Our Latest Projects
                        <br /> Made for Our Top Clients</h2>
                </div>
            </section>

            <section className="container mx-auto ">
                <div className="flex justify-center flex-wrap gap-5">
                    {post.slice(0, 6).map((a, index) => {
                        const IconComponent = customIcons[index % customIcons.length];
                        return (
                            <div key={a.id} className="lg:w-[30%] p-6 bg-gray-200 rounded-lg shadow-lg hover:bg-gray-400 transition duration-300">

                                <div className="text-4xl text-red-700 mb-3">
                                    <IconComponent />
                                </div>

                                <h3 className="text-3xl">{a.title.rendered}</h3>

                                <div className="text-gray-700" dangerouslySetInnerHTML={{ __html: a.excerpt.rendered }} />

                                <Link to={`/detail/${a.id}`} rel="noopener noreferrer" className="text-blue-500 hover:underline mt-3 block">
                                    Read More
                                </Link>
                            </div>
                        );
                    })}
                </div>
            </section>


            <section className='py-[5rem] flex justify-center'>
                <div className='text-center w-full px-5 space-y-4'>
                    <p className='text-gray-500'>OUR TEAM</p>
                    <h2 className='font-bold text-3xl'>See Our Best Team
                        <br /> Members who will offer support</h2>
                    <p className='text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer adipiscing erat eget risus sollicitudin pellentesque et non erat.
                      <br />  Maecenas quis nostrud exerci tation ullamcorper.
                    </p>
                </div>
            </section>

            <section className="container mx-auto py-3">
      <div className="flex justify-center flex-wrap gap-5">
        {teamMembers.map((a) => (
          <div key={a.id} className=" md:w-[20%]  p-6 bg-gray-100-rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition duration-300 ">
          
            <img src={a.image} className="w-full  object-cover rounded-lg mb-4" />

            <h3 className="text-2xl font-semibold">{a.name}</h3>
            <p className="text-gray-600 mb-4">{a.position}</p>
            <div className="flex gap-4 mt-3">
           
              <Link href={a.socialLinks.facebook} rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                <FaFacebook />
              </Link>
              <Link href={a.socialLinks.github} rel="noopener noreferrer" className="text-gray-800 hover:text-gray-600">
                <FaGithub />
              </Link>
              <Link to={a.socialLinks.instagram} rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800">
                <FaInstagram />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>


        </>
    )
}

export default Home
