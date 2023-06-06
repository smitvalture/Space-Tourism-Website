import React, { useEffect, useState } from 'react'
import deskIMG from './assets/destination/background-destination-desktop.jpg'
import tabIMG from './assets/destination/background-destination-tablet.jpg'
import mobIMG from './assets/destination/background-destination-mobile.jpg'
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom'
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

    const handleImage = () => {
        if (index === 0) { moonImg }
        else if (index === 1) { marsImg }
        else if (index === 2) { europaImg }
        else if (index === 3) { titanImg }
    }


    console.log(data[index]?.name);

    return (
        <section className='flex w-full min-h-screen h-full flex-col items-center relative'>

            <img className='hidden lg:block min-h-full min-w-[1024px] w-full h-auto fixed -z-50 top-0 left-0 contrast-[1.10]' src={deskIMG} alt="destination img" />
            <img className='hidden md:block lg:hidden min-h-full min-w-[768px] w-full h-auto fixed -z-50 top-0 left-0 contrast-[1.10] scale-105' src={tabIMG} alt="destination img" />
            <img className='block md:hidden min-h-full w-full h-auto fixed -z-50 top-0 left-0 contrast-[1.10] scale-105' src={mobIMG} alt="destination img" />


            <NavBar />

            <section className='max-w-[1280px] w-full min-h-[calc(100vh-150px)] h-full'>
                <h1 className='w-full mt-16 font-Barlow text-base text-[28px] tracking-[4.725px] leading-[34px] text-white'><span className='text-white/40 mr-3 font-extrabold'>01</span> PICK YOUR DESTINATION</h1>

                <section className='text-white w-full h-full grid grid-cols-2 place-items-center place-content-center'>

                    <img className='mt-16' src={index === 0 ? (moonImg) : index === 1 ? (marsImg) : index === 2 ? (europaImg) : (titanImg)} width={"445px"} height={"445px"} alt="planet Image" />

                    <div className='w-[445px] h-full flex flex-col gap-9'>

                        <nav className='subNav ml-3 h-fit flex mt-12 text-white/50 gap-9'>

                            <Link onClick={() => setIndex(0)} className={`h-full flex items-center border-b-2 border-transparent ${index === 0 ? "text-white border-white" : "hover:border-white/25"} text-base tracking-[2.7px] font-thin font-Barlow`}>{"Moon"}</Link>
                            <Link onClick={() => setIndex(1)} className={`h-full flex items-center border-b-2 border-transparent ${index === 1 ? "text-white border-white" : "hover:border-white/25"} text-base tracking-[2.7px] font-thin font-Barlow`}>{"Mars"}</Link>
                            <Link onClick={() => setIndex(2)} className={`h-full flex items-center border-b-2 border-transparent ${index === 2 ? "text-white border-white" : "hover:border-white/25"} text-base tracking-[2.7px] font-thin font-Barlow`}>{"Europa"}</Link>
                            <Link onClick={() => setIndex(3)} className={`h-full flex items-center border-b-2 border-transparent ${index === 3 ? "text-white border-white" : "hover:border-white/25"} text-base tracking-[2.7px] font-thin font-Barlow`}>{"Titan"}</Link>

                        </nav>

                        <div className='w-full h-full flex flex-col gap-5'>
                            <h1 className='text-[100px] font-Bellefair uppercase leading-[115px]'>{data[index]?.name}</h1>
                            <p className='text-lg text-[#D0D6F9] leading-8'>{data[index]?.description}</p>
                            <hr className='my-3' />
                            <div className='grid grid-cols-2'>
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