import React from 'react';
import Hero from '../Hero/Hero';
import { FaBars } from 'react-icons/fa';
import styled from 'styled-components';

const Navbar = () => {
    const StyleDiv = styled.div`
        *{
            text-decoration: none;
            list-style: none;
            box-sizing: border-box;
        }

        nav{
            position: fixed;
            top: 0;
            z-index: 5;
        }
        
        .logo{
            line-height: 3rem;
            transition: 0.5s;
        }
        
        nav ul li{
            line-height: 3rem;
        }
        
        nav label{
            transition: 0.5s;
        }
        
        nav ul li a:hover{
            transition: 0.5s;
            color: #f87171;
        }
        
        nav .icon-container a{
            letter-spacing: 5px;
            transition: 0.5s;
        }
        
        @media (max-width: 1024px) {
            ul{
                transition: all 0.5s;
            }
        
            #check:checked ~ ul{
                left: 0;
            }
        }
    `;

    return (
        <StyleDiv>
            <div>
                <nav className="
                bg-orange-100 
                w-full h-12 
                uppercase">
                    <input type="checkbox" id="check" className="
                    hidden"/>
                    <label for="check" className="
                    text-black
                    float-right
                    text-xl
                    h-12
                    flex
                    lg:hidden
                    items-center
                    cursor-pointer
                    pr-8
                    lg:pr-28">
                        <FaBars />
                    </label>
                    <label className="logo 
                    text-white 
                    text-3xl
                    font-black
                    float-left
                    pl-8
                    pr-8
                    cursor-pointer
                    lg:pl-28
                    tracking-normal
                    bg-red-300
                    hover:bg-red-400">
                        MA
                    </label>
                    <ul className="
                    text-black 
                    float-right
                    text-sm font-bold
                    lg-2:text-base
                    lg-2:fixed
                    lg-2:w-full
                    lg-2:h-screen
                    lg-2:top-12
                    lg-2:-left-full
                    lg-2:text-center
                    lg-2:bg-orange-100
                    lg-2:border-t-2
                    lg-2:border-red-300">

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
                        lg-2:grid grid-cols-3 gap-4
                        tracking-widest">
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
                                    w-16
                                    pt-1 pb-1
                                    border-2 border-zinc-400
                                    hover:bg-red-400
                                    hover:text-white">
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
                                    w-16
                                    pt-1 pb-1
                                    border-2 border-zinc-400
                                    hover:bg-red-400
                                    hover:text-white">
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
                                    w-16
                                    pt-1 pb-1
                                    border-2 border-zinc-400
                                    hover:bg-red-400
                                    hover:text-white">
                                    li.
                                </a>
                            </div>
                        </div>
                    </ul>
                </nav>
                <Hero></Hero>
            </div>
        </StyleDiv>

    );
};

export default Navbar;