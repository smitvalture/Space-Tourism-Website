import React, { useEffect, useState } from 'react'
import deskIMG from '../../assets/technology/background-technology-desktop.jpg'
import tabIMG from '../../assets/technology/background-technology-tablet.jpg'
import mobIMG from '../../assets/technology/background-technology-mobile.jpg'
import { Link, useNavigate } from 'react-router-dom'
import NavBar from '../../components/NavBar'
import { space } from '../../assets/data'
import Loading from '../../components/Loading'
import launchImg from '../../assets/technology/image-launch-vehicle-landscape.jpg'
import launchPortraitImg from '../../assets/technology/image-launch-vehicle-portrait.jpg'
import spaceImg from '../../assets/technology/image-space-capsule-landscape.jpg'
import spacePortraitImg from '../../assets/technology/image-space-capsule-portrait.jpg'
import spaceportImg from '../../assets/technology/image-spaceport-landscape.jpg'
import spaceportPortraitImg from '../../assets/technology/image-spaceport-portrait.jpg'

const Technology = () => {

  const data = space.technology
  const navigate = useNavigate()
  const [index, setIndex] = useState(0)

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleLoading = (time) => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, time);

    return () => clearTimeout(timer);
  }

  //console.log(data[index]?.name);

  return (
    <section className='flex bg-[#00030b] w-full min-h-screen h-full flex-col items-center relative'>
      {isLoading && <Loading />}
      <div className="image-container overflow-hidden w-full min-h-screen h-full absolute bg-no-repeat">
        <img className='hidden lg:block min-h-full min-w-[1024px] w-full h-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 contrast-[1.10]' src={deskIMG} alt="home img" />
        <img className='hidden md:block lg:hidden min-h-full min-w-[768px] w-full h-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 contrast-[1.10]' src={tabIMG} alt="home img" />
        <img className='block md:hidden min-h-full min-w-[640px] w-full h-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 contrast-[1.10]' src={mobIMG} alt="home img" />
      </div>

      <NavBar />

      <section className='lg:min-w-[1280px] z-10 w-full min-h-[calc(100vh-67px)] md:min-h-[calc(100vh-100px)] lg:min-h-[calc(100vh-140px)] h-full flex flex-col'>
        <h1 className='w-fit my-6 md:mt-10 md:my-0 lg:mt-16 lg:ml-40 font-Barlow text-base md:text-xl lg:text-2xl mx-auto md:mx-0 md:ml-10 text-[28px] tracking-[4.725px] leading-[34px] text-white uppercase'><span className='text-white/40 mr-3 font-extrabold'>03  </span>SPACE LAUNCH 101</h1>

        <section className='text-white w-full h-full flex flex-col text-center lg:text-left lg:grid lg:grid-cols-2 place-items-center place-content-center'>

          {/* **************Image for desktop***************** */}
          <img className='hidden lg:block lg:order-2 lg:h-[527px]' src={index === 0 ? (launchPortraitImg) : index === 1 ? (spacePortraitImg) : (spaceportPortraitImg)} alt="planet Image" />


          {/* ******************Image for tablet and mobile********************** */}
          <img className='block lg:hidden mt-8 md:mt-10 md:h-[350px] h-[223px]' src={index === 0 ? (launchImg) : index === 1 ? (spaceImg) : (spaceportImg)} alt="planet Image" />

          <div className='flex flex-col lg:flex-row lg:gap-20 lg:order-1 mt-8 md:mt-0'>
            <div className='flex lg:flex-col gap-4 items-center justify-center lg:justify-center md:mt-10 lg:mt-0'>
              <p onClick={() => { setIndex(0); }} className={`w-[40px] h-[40px] md:w-[60px] md:h-[60px] lg:w-20 lg:h-20 text-2xl flex items-center justify-center -mt-1 duration-500 ${index === 0 ? "bg-white scale-110 text-black font-bold" : "bg-white/5 border border-white/20"} cursor-pointer rounded-full overflow-hidden`}>1</p>
              <p onClick={() => { setIndex(1); }} className={`w-[40px] h-[40px] md:w-[60px] md:h-[60px] lg:w-20 lg:h-20 text-2xl flex items-center justify-center -mt-1 duration-500 ${index === 1 ? "bg-white scale-110 text-black font-bold" : "bg-white/5 border border-white/20"} cursor-pointer rounded-full overflow-hidden`}>2</p>
              <p onClick={() => { setIndex(2); }} className={`w-[40px] h-[40px] md:w-[60px] md:h-[60px] lg:w-20 lg:h-20 text-2xl flex items-center justify-center -mt-1 duration-500 ${index === 2 ? "bg-white scale-110 text-black font-bold" : "bg-white/5 border border-white/20"} cursor-pointer rounded-full overflow-hidden`}>3</p>
            </div>
            <div className='w-full h-full mt-8 md:mt-[60px] lg:mt-0 flex flex-col items-center lg:items-start'>

              <h3 className='uppercase font-Bellefair text-[#D0D6F9] md:leading-7'>THE TERMINOLOGY…</h3>
              <h1 className='text-2xl md:text-[40px] lg:text-[56px] font-Bellefair uppercase leading-7 md:leading-10 lg:leading-[64px] mt-2'>{data[index]?.name}</h1>
              <p className='w-[327px] md:w-[458px] lg:w[470px] text-[15px] md:text-base lg:text-lg text-[#D0D6F9] leading-6 md:leading-7 lg:leading-8 mt-4'>{data[index]?.description}</p>

            </div>
          </div>
        </section>
      </section>

    </section >
  )
}

export default Technology