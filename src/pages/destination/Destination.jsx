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
        if (index === 0) {moonImg}
        else if (index === 1) {marsImg}
        else if (index === 2) {europaImg}
        else if (index === 3) {titanImg}
    }


    console.log(data[index]?.name);

    return (
        <section className='flex w-full min-h-screen h-full flex-col items-center relative'>

            <img className='hidden lg:block min-h-full min-w-[1024px] w-full h-auto fixed -z-50 top-0 left-0 contrast-[1.10]' src={deskIMG} alt="destination img" />
            <img className='hidden md:block lg:hidden min-h-full min-w-[768px] w-full h-auto fixed -z-50 top-0 left-0 contrast-[1.10] scale-105' src={tabIMG} alt="destination img" />
            <img className='block md:hidden min-h-full w-full h-auto fixed -z-50 top-0 left-0 contrast-[1.10] scale-105' src={mobIMG} alt="destination img" />


            <NavBar />

            <h1 className='w-full px-40 mt-16 font-Barlow text-base text-[28px] tracking-[4.725px] leading-[34px] text-white'><span className='text-white/40 mr-3 font-extrabold'>01</span> PICK YOUR DESTINATION</h1>

            <section className='text-white w-full h-full grid grid-cols-2 place-items-center'>

                <img src={index === 0 ? moonImg : index === 1 ? marsImg : index === 2 ? europaImg : titanImg} alt="planet Image" />
                <div>

                    {/* {
                            data.map((item, index) => (
                                
                                <NavLink key={index} onClick={() => setIndex(0)} to={"moon"} className='h-full flex items-center border-b-2 border-transparent text-base tracking-[2.7px] font-thin font-Barlow'>{item.name}</NavLink>
                                ))
                            } */}
                    <nav className='subNav w-full h-fit flex justify-end mt-12 text-white/50 gap-9'>

                        <Link onClick={() => setIndex(0)} className={`h-full flex items-center border-b-2 border-transparent ${index === 0 ? "text-white border-white" : "hover:border-white/25"} text-base tracking-[2.7px] font-thin font-Barlow`}>{"Moon"}</Link>
                        <Link onClick={() => setIndex(1)} className={`h-full flex items-center border-b-2 border-transparent ${index === 1 ? "text-white border-white" : "hover:border-white/25"} text-base tracking-[2.7px] font-thin font-Barlow`}>{"Mars"}</Link>
                        <Link onClick={() => setIndex(2)} className={`h-full flex items-center border-b-2 border-transparent ${index === 2 ? "text-white border-white" : "hover:border-white/25"} text-base tracking-[2.7px] font-thin font-Barlow`}>{"Europa"}</Link>
                        <Link onClick={() => setIndex(3)} className={`h-full flex items-center border-b-2 border-transparent ${index === 3 ? "text-white border-white" : "hover:border-white/25"} text-base tracking-[2.7px] font-thin font-Barlow`}>{"Titan"}</Link>

                    </nav>

                </div>

            </section>

        </section >
    )
}

export default Destination