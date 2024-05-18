import {Link} from "react-router-dom";
import React from "react";

export const Navigation = () => {
    return (
        <nav className="flex justify-between items-center h-[50px] px-5 shadow-md bg-slate-500 text-white">
            <h3 className="text-2xl text-amber-300 font-bold">Github search</h3>

            <span>
        <Link to="/" className="mr-3">Home</Link>
        <Link to="/favourites">Favourites</Link>
      </span>
        </nav>
    )
}

