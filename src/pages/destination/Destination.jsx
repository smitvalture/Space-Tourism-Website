import React, { useEffect, useState } from 'react'
import deskIMG from './assets/destination/background-destination-desktop.jpg'
import tabIMG from './assets/destination/background-destination-tablet.jpg'
import mobIMG from './assets/destination/background-destination-mobile.jpg'
import { Link, useNavigate } from 'react-router-dom'
import NavBar from '../../components/NavBar'
import { space } from '../../assets/data'
import moonImg from './assets/destination/image-moon.webp'
import marsImg from './assets/destination/image-mars.webp'
import europaImg from './assets/destination/image-europa.webp'
import titanImg from './assets/destination/image-titan.webp'


const Destination = () => {

    const data = space.destinations
    const navigate = useNavigate()
    const [index, setIndex] = useState(0)

    //console.log(data[index]?.name);

    return (
        <section className='flex bg-[#00030b] w-full min-h-screen h-full flex-col items-center relative'>

            <img className='hidden lg:block min-h-full min-w-[1024px] w-full h-auto fixed top-0 left-0 contrast-[1.10]' src={deskIMG} alt="destination img" />
            <img className='hidden md:block lg:hidden min-h-full min-w-[768px] w-full h-auto fixed top-0 left-0 contrast-[1.10] scale-105' src={tabIMG} alt="destination img" />
            <img className='block md:hidden min-h-full w-full h-auto fixed top-0 left-0 contrast-[1.10] scale-105' src={mobIMG} alt="destination img" />


            <NavBar />

            <section className='lg:max-w-[1280px] z-10 w-full min-h-[calc(100vh-150px)] h-full'>
                <h1 className='w-fit my-6 md:my-10 lg:my-0 lg:mt-16 font-Barlow text-base md:text-xl lg:text-2xl mx-auto md:mx-0 md:ml-10 lg:ml-0 text-[28px] tracking-[4.725px] leading-[34px] text-white'><span className='text-white/40 mr-3 font-extrabold'>01</span> PICK YOUR DESTINATION</h1>

                <section className='text-white -mt-5 lg:mt-0 w-full h-full flex flex-col lg:grid text-center lg:text-left lg:grid-cols-2 place-items-center place-content-center'>

                    <img className='my-6 md:my-14 lg:my-0 lg:mt-16 lg:w-[445px] lg:h-[445px] md:w-[300px] md:h-[300px] w-[170px] h-[170px]' src={index === 0 ? (moonImg) : index === 1 ? (marsImg) : index === 2 ? (europaImg) : (titanImg)} alt="planet Image" />

                    <div className='w-[327px] md:w-[445px] h-full flex flex-col items-center lg:items-start gap-9 md:pb-14 lg:pb-0'>

                        <nav className='subNav lg:ml-3 h-11 text-sm md:text-base flex lg:mt-12 text-white/50 gap-9'>

                            <Link onClick={() => setIndex(0)} className={`h-full flex items-center border-b-2 border-transparent ${index === 0 ? "text-white border-white" : "hover:border-white/25"} text-base tracking-[2.7px] font-thin font-Barlow`}>{"Moon"}</Link>
                            <Link onClick={() => setIndex(1)} className={`h-full flex items-center border-b-2 border-transparent ${index === 1 ? "text-white border-white" : "hover:border-white/25"} text-base tracking-[2.7px] font-thin font-Barlow`}>{"Mars"}</Link>
                            <Link onClick={() => setIndex(2)} className={`h-full flex items-center border-b-2 border-transparent ${index === 2 ? "text-white border-white" : "hover:border-white/25"} text-base tracking-[2.7px] font-thin font-Barlow`}>{"Europa"}</Link>
                            <Link onClick={() => setIndex(3)} className={`h-full flex items-center border-b-2 border-transparent ${index === 3 ? "text-white border-white" : "hover:border-white/25"} text-base tracking-[2.7px] font-thin font-Barlow`}>{"Titan"}</Link>

                        </nav>

                        <div className='w-full h-full flex flex-col gap-5'>
                            <h1 className='text-6xl md:text-[80px] lg:text-[100px] font-Bellefair uppercase leading-[115px]'>{data[index]?.name}</h1>
                            <p className='text-sm md:text-base lg:text-lg text-[#D0D6F9] leading-8'>{data[index]?.description}</p>
                            <div className='my-3 lg:mt-8 h-0.5 w-full bg-white/30'></div>
                            <div className='flex flex-col gap-8 md:gap-0 md:grid md:grid-cols-2'>
                                <div className='flex flex-col gap-3'>
                                    <p className='text-sm text-[#D0D6F9] font-Barlow tracking-[2.36px]'>AVG. DISTANCE</p>
                                    <p className='text-2xl leading-8 font-Bellefair uppercase'>{data[index]?.distance}</p>
                                </div>
                                <div className='flex flex-col gap-3'>
                                    <p className='text-sm text-[#D0D6F9] font-Barlow tracking-[2.36px] uppercase'>Est. travel time</p>
                                    <p className='text-2xl leading-8 font-Bellefair uppercase'>{data[index]?.travel}</p>
                                </div>
                            </div>
                        </div>

                    </div>

                </section>
            </section>

        </section >
    )
}

export default Destination