import React from 'react'

function Header() {
    const logoUrl = 'https://fontmeme.com/permalink/230906/55642d5635879d6a3ca7b0ee7dc41cd9.png'
  return (
    <header className="flex justify-between items-center p-8 shadow-md shadow-gray-700 ">
        <div className="logo w-40">
            <img src={logoUrl} alt="=movie finder logo" />
        </div>
        <nav className="flex gap-5 items-center">
        
            {/* <ul className="flex gap-5 font-bold">
                <li><a href="">Home</a></li>
                <li><a href="">About US</a></li>
                <li><a href="">Request A Movie</a></li>
            </ul> */}
            <div className="search flex gap-4">
                <input type="text" className="rounded p-2" placeholder="Search Your Movie...." />
                <button type="submit" className="rounded-md bg-red-500 px-3 py-2 font-bold hover:bg-red-700">Search</button>
            </div>
        </nav>
    </header>

  )
}

export default Header