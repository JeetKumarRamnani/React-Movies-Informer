import React from 'react'
import SearchContainer from './SearchContainer'

function Header() {
    const logoUrl = 'https://fontmeme.com/permalink/230906/26653325ef8a859c02351a024f6332b9.png'


  return (
    <header className="md:flex justify-between items-center 
    p-8 shadow-md  shadow-gray-700 ">
        <div className="logo  md:w-40">
            <img src={logoUrl} alt="movie finder logo" className="" />
        </div>
        <nav className="flex gap-5 items-center">
        
            {/* <ul className="flex gap-5 font-bold">
                <li><a href="">Home</a></li>
                <li><a href="">About US</a></li>
                <li><a href="">Request A Movie</a></li>
            </ul> */}
            {/* <div className="search md:flex gap-4 hidden  ">
                <input type="text" className="rounded md:p-2" placeholder="Search Your Movie...." />
                <button type="submit" className="rounded-md bg-red-500 px-3 py-2 font-bold hover:bg-red-700">Search</button>
            </div> */}

            <SearchContainer styles="search md:flex gap-4 hidden "/>
        </nav>
    </header>

  )
}

export default Header