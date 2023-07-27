import React, { useEffect, useState } from 'react'
import deskIMG from '../../assets/crew/background-crew-desktop.jpg'
import tabIMG from '../../assets/crew/background-crew-tablet.jpg'
import mobIMG from '../../assets/crew/background-crew-mobile.jpg'
import { Link, useNavigate } from 'react-router-dom'
import NavBar from '../../components/NavBar'
import { space } from '../../assets/data'
import Loading from '../../components/Loading'
import anoushehImg from '../../assets/crew/image-anousheh-ansari.webp'
import douglasImg from '../../assets/crew/image-douglas-hurley.webp'
import markImg from '../../assets/crew/image-mark-shuttleworth.webp'
import victorImg from '../../assets/crew/image-victor-glover.webp'

const Crew = () => {

    const data = space.crew
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

            <section className='lg:max-w-[1280px] z-10 w-full min-h-[calc(100vh-67px)] lg:min-h-[calc(100vh-140px)] h-full flex flex-col'>
                <h1 className='w-fit my-6 md:mt-10 md:my-0 lg:mt-16 font-Barlow text-base md:text-xl lg:text-2xl mx-auto md:mx-0 md:ml-10 lg:ml-0 text-[28px] tracking-[4.725px] leading-[34px] text-white uppercase'><span className='text-white/40 mr-3 font-extrabold'>02</span> MEET YOUR crew</h1>

                <section className='text-white w-full h-full flex flex-col md:flex-col-reverse text-center lg:text-left lg:grid lg:grid-cols-2 place-items-center place-content-center'>

                    <img className='lg:order-2 mt-8 md:mt-10 lg:mt-0 lg:h-[100%-1px] md:h-[572px] h-[223px]' src={index === 0 ? (douglasImg) : index === 1 ? (markImg) : index === 2 ? (victorImg) : (anoushehImg)} alt="planet Image" />
                    <div className='md:hidden h-0.5 w-4/5 mx-auto bg-white/30'></div>

                    <div className='lg:order-1 flex flex-col md:flex-col-reverse mt-8 md:mt-0'>
                        <div className='flex gap-4 items-center justify-center lg:justify-start md:mt-10 lg:mt-[88px]'>
                            <p onClick={() => { setIndex(0); }} className={`w-[10px] h-[10px] lg:w-4 lg:h-4 duration-500 ${index === 0 ? "bg-white scale-110" : "bg-white/30"} cursor-pointer rounded-full overflow-hidden`}></p>
                            <p onClick={() => { setIndex(1); }} className={`w-[10px] h-[10px] lg:w-4 lg:h-4 duration-500 ${index === 1 ? "bg-white scale-110" : "bg-white/30"} cursor-pointer rounded-full overflow-hidden`}></p>
                            <p onClick={() => { setIndex(2); }} className={`w-[10px] h-[10px] lg:w-4 lg:h-4 duration-500 ${index === 2 ? "bg-white scale-110" : "bg-white/30"} cursor-pointer rounded-full overflow-hidden`}></p>
                            <p onClick={() => { setIndex(3); }} className={`w-[10px] h-[10px] lg:w-4 lg:h-4 duration-500 ${index === 3 ? "bg-white scale-110" : "bg-white/30"} cursor-pointer rounded-full overflow-hidden`}></p>
                        </div>
                        <div className='w-[327px] md:w-[592px] h-full mt-8 md:mt-[60px] flex flex-col items-center lg:items-start'>

                            <h3 className='md:text-2xl lg:text-[32px] uppercase font-Bellefair text-white/50 md:leading-7'>{data[index]?.role}</h3>
                            <h1 className='text-2xl md:text-[40px] lg:text-[56px] font-Bellefair uppercase leading-7 md:leading-10 lg:leading-[64px] mt-2'>{data[index]?.name}</h1>
                            <p className='text-[15px] md:text-base lg:text-lg text-[#D0D6F9] leading-6 md:leading-7 lg:leading-8 mt-4'>{data[index]?.bio}</p>

                        </div>
                    </div>
                </section>
            </section>

        </section >
    )
}

export default Crew