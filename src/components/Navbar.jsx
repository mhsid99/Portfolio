import { useState } from "react";
import React from "react";
import {MenuIcon, XIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";

export default function NavBar() {
    const [navbar, setNavbar] = useState(false);

    return (
        <nav className="bg-gray-900 sticky top-0 z-10 text-xl" style={{fontFamily: "Raleway"}}>
            <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                <div className="flex items-center justify-between py-3 md:py-5 md:block">
                    <div className="md:hidden">
                        <button
                            className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border "
                            onClick={() => setNavbar(!navbar)}
                        >
                            {navbar ? (
                                <XIcon className="w-6 h-6 text-white position: sticky"/>
                            ) : (
                                <MenuIcon className="w-6 h-6 text-white position: sticky" />
                            )}
                        </button>
                    </div>
                </div>
                
                <div>
                    <div
                        className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ease-in-out duration-500 ${
                        navbar ? "opacity-100 max-h-screen" : "hidden"
                        }`}
                        style={{ transition: "opacity 1000ms ease-in-out" }}
                    >
                        <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                            <li className="text-white hover:text-green-600">
                            <Link to="/portfolio" onClick={() => setNavbar(false)}>Home</Link>
                            </li>
                            <li className="text-white hover:text-green-600">
                            <Link to="/Projects" onClick={() => setNavbar(false)}>
                                    Projects
                                </Link>
                            </li>

                            <li className="text-white hover:text-green-600">
                            <Link to="/Skills" onClick={() => setNavbar(false)}>
                                    Skills
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}
