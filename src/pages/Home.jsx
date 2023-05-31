import React from 'react'
import deskIMG from '../assets/home/background-home-desktop.png'
import tabIMG from '../assets/home/background-home-tablet.jpg'
import mobIMG from '../assets/home/background-home-mobile.jpg'
import { Link } from 'react-router-dom'
import NavBar from '../components/NavBar'

const Home = () => {
  return (
    <section className='flex w-full h-screen flex-col justify-center items-center relative'>

      <img className='hidden lg:block min-h-full min-w-[1024px] w-full h-auto fixed -z-50 top-0 left-0 contrast-[1.10]' src={deskIMG} alt="home img" />
      <img className='hidden md:block lg:hidden min-h-full min-w-[768px] w-full h-auto fixed -z-50 top-0 left-0 contrast-[1.10]' src={tabIMG} alt="home img" />
      <img className='block md:hidden min-h-full min-w-[640px] w-full h-auto fixed -z-50 top-0 left-0 contrast-[1.10]' src={mobIMG} alt="home img" />


      <NavBar />

      <div className='w-full h-full grid grid-cols-2'>
        <div className='w-full h-full flex justify-center items-center'>sadad</div>
        <div className='w-full h-full flex justify-center items-center'>
          <Link className='w-64 h-64 mt-32 flex justify-center items-center bg-white rounded-full duration-500 outline outline-0 hover:outline-[100px] outline-white/20'>
            <p className='text-3xl tracking-[2px] font-Bellefair'>EXPLORE</p>
          </Link>
        </div>
      </div>

    </section>
  )
}

export default Home