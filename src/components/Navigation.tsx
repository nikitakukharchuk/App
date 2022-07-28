import React from "react";
import { Link } from "react-router-dom";

export function Navigation() {
    return (
        <nav className="flex justify-between items-center h-[50px] px-5 shadow-md bg-gray-100 ">
            <h3 className="font-bold">Nikita Kukharchuk</h3>


            <span>
                <Link to='/' className='mr-2 p-2 hover:outline-4 rounded font-bold outline outline-2 outline-black '>Home</Link>
                <Link to="/favourites" className='p-2 hover:outline-4 rounded font-bold outline outline-2 outline-black '>Favourites</Link>
            </span>
        </nav>
    )
}