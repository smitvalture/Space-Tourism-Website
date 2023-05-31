import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import star from '../assets/home/star.jpg'

const NavBar = () => {
    return (
        <nav className='navLink flex justify-between items-center w-full lg:pl-14 pl-6 lg:pt-10 relative'>

            {/* desktop & tablet Navigation */}
            <Link to={"/"} className='w-12 h-12 rounded-full overflow-hidden duration-500 hover:scale-90 hover:rotate-180'>
                <img className='' src={star} alt="star img" />
            </Link>

            <div className='absolute hidden lg:block left-40 w-[36%] z-10 h-[1px] bg-white/20'></div>

            <div className='h-24 lg:w-7/12 lg:pl-32 md:px-12 flex gap-12 justify-start items-center backdrop-blur-lg border-[1px] border-solid border-white border-opacity-[0.04] bg-white/5 text-white/70'>
                <NavLink to={"/"} className='h-full flex items-center border-b-2 border-transparent focus:border-white hover:border-white/25 text-base tracking-[2.7px] font-thin font-Barlow'><span className='font-bold mr-1.5 text-white'>00</span> HOME</NavLink>
                <NavLink to={"/destination"} className='h-full flex items-center border-b-2 border-transparent focus:border-white hover:border-white/25 text-base tracking-[2.7px] font-thin font-Barlow'><span className='font-bold mr-1.5 text-white'>01</span> DESTINATION</NavLink>
                <NavLink to={"/crew"} className='h-full flex items-center border-b-2 border-transparent focus:border-white hover:border-white/25 text-base tracking-[2.7px] font-thin font-Barlow'><span className='font-bold mr-1.5 text-white'>02</span> CREW</NavLink>
                <NavLink to={"/technology"} className='h-full flex items-center border-b-2 border-transparent focus:border-white hover:border-white/25 text-base tracking-[2.7px] font-thin font-Barlow'><span className='font-bold mr-1.5 text-white'>03</span> TECHNOLOGY</NavLink>
            </div>

        </nav>
    )
}

export default NavBar