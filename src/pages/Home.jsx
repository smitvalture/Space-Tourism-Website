import React, { useEffect, useState } from 'react'
import deskIMG from '../assets/home/background-home-desktop.png'
import tabIMG from '../assets/home/background-home-tablet.jpg'
import mobIMG from '../assets/home/background-home-mobile.jpg'
import { Link } from 'react-router-dom'
import NavBar from '../components/NavBar'
import Loading from '../components/Loading'

const Home = () => {

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);



  return (
    <section className='flex bg-[#020410] w-full min-h-screen h-full flex-col items-center relative'>
      {isLoading && <Loading />}
      <div className="image-container overflow-hidden w-full min-h-screen h-full absolute bg-no-repeat">
        <img className='hidden lg:block min-h-full min-w-[1024px] w-full h-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 contrast-[1.10]' src={deskIMG} alt="home img" />
        <img className='hidden md:block lg:hidden min-h-full min-w-[768px] w-full h-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 contrast-[1.10]' src={tabIMG} alt="home img" />
        <img className='block md:hidden min-h-full min-w-[640px] w-full h-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 contrast-[1.10]' src={mobIMG} alt="home img" />
      </div>

      <NavBar />

      <div className='w-full min-h-[calc(100vh-138px)] z-10 py-14 md:py-28 lg:py-0 grid grid-rows-2 lg:grid-rows-1 lg:grid-cols-2 space-y-14 md:space-y-0'>

        <div className='w-full h-full flex justify-center items-center'>
          <div className='w-[327px] h-[276px] md:w-[450px] md:h-[382px] flex flex-col text-white text-center lg:text-left'>
            <p className='font-Barlow font-light text-base md:text-[28px] text-[#D0D6F9]'>SO, YOU WANT TO TRAVEL TO</p>
            <p className='text-[80px] md:text-[150px] font-Bellefair'>SPACE</p>
            <p className='text-[15px] lg::text-lg font-thin leading-8 text-[#D0D6F9]'>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
          </div>
        </div>

        <div className='w-full h-full flex justify-center items-center'>
          <Link to={"/destination"} className='w-[150px] h-[150px] md:w-64 md:h-64 lg:mt-36 flex justify-center items-center bg-white rounded-full duration-500 outline outline-0 hover:outline-[100px] outline-white/20'>
            <p className='text-3xl tracking-[2px] font-Bellefair'>EXPLORE</p>
          </Link>
        </div>

      </div>

    </section>
  )
}

export default Home