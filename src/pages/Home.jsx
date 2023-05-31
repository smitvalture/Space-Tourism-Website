import React from 'react'
import deskIMG from '../assets/home/background-home-desktop.png'
import tabIMG from '../assets/home/background-home-tablet.jpg'
import mobIMG from '../assets/home/background-home-mobile.jpg'
import { Link } from 'react-router-dom'
import NavBar from '../components/NavBar'

const Home = () => {
  return (
    <section className='flex w-full min-h-screen h-full flex-col items-center relative'>

      <img className='hidden lg:block min-h-full min-w-[1024px] w-full h-auto fixed -z-50 top-0 left-0 contrast-[1.10]' src={deskIMG} alt="home img" />
      <img className='hidden md:block lg:hidden min-h-full min-w-[768px] w-full h-auto fixed -z-50 top-0 left-0 contrast-[1.10] scale-105' src={tabIMG} alt="home img" />
      <img className='block md:hidden min-h-full min-w-[640px] w-full h-auto fixed -z-50 top-0 left-0 contrast-[1.10]' src={mobIMG} alt="home img" />


      <NavBar />

      <div className='w-full h-[calc(100vh-138px)] py-14 md:py-28 lg:py-0 grid grid-rows-2 lg:grid-rows-1 lg:grid-cols-2'>

        <div className='w-full h-full flex justify-center items-center'>
          <div className='w-[450px] h-[382px] flex flex-col text-white text-center lg:text-left'>
            <p className='font-Barlow font-light text-[28px] text-[#D0D6F9]'>SO, YOU WANT TO TRAVEL TO</p>
            <p className='text-[150px] font-Bellefair'>SPACE</p>
            <p className='text-lg font-thin leading-8 text-[#D0D6F9]'>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
          </div>
        </div>

        <div className='w-full h-full flex justify-center items-center'>
          <Link className='w-64 h-64 lg:mt-36 flex justify-center items-center bg-white rounded-full duration-500 outline outline-0 hover:outline-[100px] outline-white/20'>
            <p className='text-3xl tracking-[2px] font-Bellefair'>EXPLORE</p>
          </Link>
        </div>

      </div>

    </section>
  )
}

export default Home