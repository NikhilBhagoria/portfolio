import React from 'react'
import { NavLink } from 'react-router-dom'

const NavMenu = () => {
    const navmenu = [
        {
            id: 1,
            name: "Home",
            link: "/home"
        },
        {
            id: 1,
            name: "About",
            link: "/about"
        },
        {
            id: 1,
            name: "Project",
            link: "/project"
        },
        {
            id: 1,
            name: "Contact",
            link: "/contact"
        },
    ]
    return (
        <nav className='bg-black text-white flex'>
            <div className='flex-auto py-5 text-4xl'>
                {"{N}"}
            </div>
            <ul className='flex py-5 px-8'>
                {navmenu?.map((item) => (
                    <NavLink to={item.link} className={({ isActive }) => isActive ? "cursor-pointer bg-blue-800 rounded-lg p-2 mx-2" : "cursor-pointer rounded-lg p-2 mx-2"}>{item?.name}</NavLink>
                ))}
            </ul>
        </nav>
    )
}

export default NavMenu