import React from 'react';
import Hero from '../Hero/Hero';
import { FaBars } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
    return (
        <div>
            <nav className="
                bg-orange-100 
                w-full h-16 
                uppercase">
                <input type="checkbox" id="check" className="
                    hidden"/>
                <label for="check" className="
                    text-black
                    float-right
                    text-xl
                    h-16
                    flex
                    lg:hidden
                    items-center
                    cursor-pointer
                    pr-8
                    lg:pr-28">
                    <FaBars />
                </label>
                <label className="logo 
                    text-black 
                    text-2xl
                    font-extralight
                    float-left
                    pl-8
                    cursor-pointer
                    lg:pl-28">
                    Mahir Ashhab
                </label>
                <ul className="
                    text-black 
                    float-right
                    text-sm font-bold
                    lg-2:text-base
                    lg-2:fixed
                    lg-2:w-full
                    lg-2:h-screen
                    lg-2:top-16
                    lg-2:-left-full
                    lg-2:text-center
                    lg-2:bg-orange-100
                    lg-2:border-t-2
                    lg-2:border-zinc-400">

                    <li className="
                        inline-block 
                        mr-8
                        lg-2:block
                        lg-2:mt-12
                        lg-2:mb-12
                        lg-2:mr-0
                        lg-2:leading-10">
                        <a href="./" className="
                            ">
                            Education
                        </a>
                    </li>
                    <li className="
                        inline-block 
                        mr-8
                        lg-2:block
                        lg-2:mt-12
                        lg-2:mb-12
                        lg-2:mr-0
                        lg-2:leading-10">
                        <a href="./" className="
                            ">
                            Projects
                        </a>
                    </li>
                    <li className="
                        inline-block
                        pr-8
                        lg:pr-28
                        lg-2:block
                        lg-2:mt-12
                        lg-2:mb-12
                        lg-2:p-0
                        lg-2:leading-10">
                        <a href="./" className="
                            ">
                            About
                        </a>
                    </li>

                    <div className="
                    hidden
                    icon-container
                    pt-20 
                    sm:ml-32
                    sm:mr-32
                    ml-20
                    mr-20
                    lg-2:grid grid-cols-3 gap-4">
                        <div className="
                        text-base
                        font-bold 
                        uppercase
                        flex">
                            <a
                                href="https://www.facebook.com/mahir.ashhab.71/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
                            pl-4 pt-1 pb-1 pr-2
                            border-2 border-zinc-400">
                                fb.
                            </a>
                        </div>
                        <div className="
                        font-bold 
                        uppercase
                        flex
                        justify-center">
                            <a
                                href="https://www.linkedin.com/in/mahir-ashhab77/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
                            pl-4 pt-1 pb-1 pr-2
                            border-2 border-zinc-400">
                                gh.
                            </a>
                        </div>
                        <div className="
                        font-bold 
                        uppercase
                        flex
                        justify-end">
                            <a
                                href="https://www.linkedin.com/in/mahir-ashhab77/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
                            pl-4 pt-1 pb-1 pr-2
                            border-2 border-zinc-400">
                                li.
                            </a>
                        </div>
                    </div>
                </ul>
            </nav>
            <Hero></Hero>
        </div >
    );
};

export default Navbar;