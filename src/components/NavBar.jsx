import React, { useRef, useState, useEffect } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import star from '../assets/home/star.jpg'
import ham from '../assets/shared/icon-hamburger.svg'
import close from '../assets/shared/icon-close.svg'

const NavBar = () => {

    const ref = useRef()

    const navigate = useNavigate()

    const [menu, setMenu] = useState(false)

    // useEffect(() => {
    //     const checkIfClickedOutside = e => {
    //         // If the menu is open and the clicked target is not within the menu,
    //         // then close the menu
    //         if (menu && ref.current && !ref.current.contains(e.target)) {
    //             setMenu(false)
    //         }
    //     }

    //     document.addEventListener("mousedown", checkIfClickedOutside)

    //     return () => {
    //         // Cleanup the event listener
    //         document.removeEventListener("mousedown", checkIfClickedOutside)
    //     }
    // }, [menu])

    // const handleClick = () => {
    //     navigate("/destination/moon")
    //     console.log("clicked");
    // }

    return (
        <>
            {/* desktop & tablet Navigation */}
            <nav className='hidden md:flex z-50 navLink justify-between items-center w-full lg:pl-14 pl-6 lg:mt-10 relative'>

                <Link to={"/"} className='w-12 h-12 rounded-full overflow-hidden duration-500 hover:scale-90 hover:rotate-180'>
                    <img className='' src={star} alt="star img" />
                </Link>

                <div className='absolute hidden lg:block left-40 w-[36%] z-10 h-[1px] bg-white/20'></div>

                <div className='h-24 lg:w-7/12 lg:pl-32 md:px-12 lg:px-0 flex md:gap-9 lg:gap-12 justify-start items-center backdrop-blur-lg border-[1px] border-solid border-white border-opacity-[0.04] bg-white/5 text-white/70'>
                    <NavLink to={"/"} className='h-full flex items-center border-b-2 border-transparent focus:border-white hover:border-white/25 text-base tracking-[2.7px] font-thin font-Barlow'><span className='font-bold mr-2 text-white'>00</span> HOME</NavLink>
                    <NavLink to={"/destination"} className='h-full flex items-center border-b-2 border-transparent focus:border-white hover:border-white/25 text-base tracking-[2.7px] font-thin font-Barlow'><span className='font-bold mr-2 text-white'>01</span> DESTINATION</NavLink>
                    <NavLink to={"/crew"} className='h-full flex items-center border-b-2 border-transparent focus:border-white hover:border-white/25 text-base tracking-[2.7px] font-thin font-Barlow'><span className='font-bold mr-2 text-white'>02</span> CREW</NavLink>
                    <NavLink to={"/technology"} className='h-full flex items-center border-b-2 border-transparent focus:border-white hover:border-white/25 text-base tracking-[2.7px] font-thin font-Barlow'><span className='font-bold mr-2 text-white'>03</span> TECHNOLOGY</NavLink>
                </div>

            </nav>

            { /* mobile Navigation */}

            <nav className='flex md:hidden navLink justify-between items-center w-full px-6 pt-6 relative'>

                <Link to={"/"} className='w-10 h-10 rounded-full overflow-hidden duration-500'>
                    <img className='' src={star} alt="star img" />
                </Link>

                <img onClick={() => { setMenu((current) => !current); }} className='cursor-pointer z-40' src={menu ? close : ham} alt="menu" />

                <div className={`fixed z-30 w-64 ${menu ? "right-0" : "-right-[700px]"} h-screen flex flex-col gap-8 pt-28 pl-8 pr-0.5 overflow-hidden backdrop-blur-2xl bg-white/10 top-0 duration-500 text-white/70`}>
                    <NavLink onClick={() => setMenu(false)} to={"/"} className='flex h-8 items-center border-r-4 border-transparent focus:border-white hover:border-white/25 text-base tracking-[2.7px] font-thin font-Barlow'><span className='font-bold mr-2 text-white'>00</span> HOME</NavLink>
                    <NavLink onClick={() => { setMenu(false); }} to={"/destination"} className='flex h-8 items-center border-r-4 border-transparent focus:border-white hover:border-white/25 text-base tracking-[2.7px] font-thin font-Barlow'><span className='font-bold mr-2 text-white'>01</span> DESTINATION</NavLink>
                    <NavLink onClick={() => setMenu(false)} to={"/crew"} className='flex h-8 items-center border-r-4 border-transparent focus:border-white hover:border-white/25 text-base tracking-[2.7px] font-thin font-Barlow'><span className='font-bold mr-2 text-white'>02</span> CREW</NavLink>
                    <NavLink onClick={() => setMenu(false)} to={"/technology"} className='flex h-8 items-center border-r-4 border-transparent focus:border-white hover:border-white/25 text-base tracking-[2.7px] font-thin font-Barlow'><span className='font-bold mr-2 text-white'>03</span> TECHNOLOGY</NavLink>
                </div>


            </nav>

        </>
    )
}

export default NavBar