import React from 'react';
import Hero from '../Hero/Hero';

const Navbar = () => {
    return (
        <div>
            <ul className="
            flex 
            justify-end items-end 
            text-base font-bold tracking-widest
            pr-28 pl-28 pt-6 pb-6
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