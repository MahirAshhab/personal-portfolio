import React from 'react';
import Hero from '../Hero/Hero';

const Navbar = () => {
    return (
        <div>
            <ul className="
            flex 
            justify-end items-end 
            text-sm font-bold tracking-widest text-black
            lg:text-base
            pr-8 pl-8 pt-6 pb-6
            md:pr-28 md:pl-28 md:pt-6 md:pb-6
            bg-orange-100
            uppercase">
                <li className="mr-8">Education</li>
                <li className="mr-8">Projects</li>
                <li>About</li>
            </ul>
            <Hero></Hero>
        </div>
    );
};

export default Navbar;