import React, { useEffect } from 'react'
import deskIMG from '../assets/destination/background-destination-desktop.jpg'
import tabIMG from '../assets/destination/background-destination-tablet.jpg'
import mobIMG from '../assets/destination/background-destination-mobile.jpg'
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom'
import NavBar from '../components/NavBar'

const Destination = () => {

    const navigate = useNavigate()

    useEffect(() => {
        navigate("moon")
    }, [])

    return (
        <section className='flex w-full min-h-screen h-full flex-col items-center relative'>

            <img className='hidden lg:block min-h-full min-w-[1024px] w-full h-auto fixed -z-50 top-0 left-0 contrast-[1.10]' src={deskIMG} alt="destination img" />
            <img className='hidden md:block lg:hidden min-h-full min-w-[768px] w-full h-auto fixed -z-50 top-0 left-0 contrast-[1.10] scale-105' src={tabIMG} alt="destination img" />
            <img className='block md:hidden min-h-full w-full h-auto fixed -z-50 top-0 left-0 contrast-[1.10] scale-105' src={mobIMG} alt="destination img" />


            <NavBar />

            <h1 className='w-full px-40 mt-16 font-Barlow text-base text-[28px] tracking-[4.725px] leading-[34px] text-white'><span className='text-white/40 mr-3 font-extrabold'>01</span> PICK YOUR DESTINATION</h1>

            <nav className='subNav w-full h-fit flex justify-end px-[322px] mt-12 text-white/50 gap-9'>
                <NavLink to={"moon"} className='h-full flex items-center border-b-2 border-transparent focus:border-white hover:border-white/25 text-base tracking-[2.7px] font-thin font-Barlow'>MOON</NavLink>
                <NavLink to={"mars"} className='h-full flex items-center border-b-2 border-transparent focus:border-white hover:border-white/25 text-base tracking-[2.7px] font-thin font-Barlow'>MARS</NavLink>
                <NavLink to={"europa"} className='h-full flex items-center border-b-2 border-transparent focus:border-white hover:border-white/25 text-base tracking-[2.7px] font-thin font-Barlow'>EUROPA</NavLink>
                <NavLink to={"titan"} className='h-full flex items-center border-b-2 border-transparent focus:border-white hover:border-white/25 text-base tracking-[2.7px] font-thin font-Barlow'>TITAN</NavLink>
            </nav>

            <section className='text-white'>
                <Outlet />
            </section>

        </section>
    )
}

export default Destination