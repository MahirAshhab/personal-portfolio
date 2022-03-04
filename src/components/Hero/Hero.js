import React from 'react';
import cv from '../../cv/Mahir_Ashhab_CV.pdf'
import styled from 'styled-components';

const Hero = () => {
    const StyleDiv = styled.div`
        .hero-container{
            background-color: rgb(255 247 237);
        }
        .cv{
            transition: .5s;
        }
        .icon-container a{
            letter-spacing: 5px;
            transition: 0.5s;
        }
    `;

    return (
        <StyleDiv>
            <div className="
            hero-container
            grid md:grid-cols-2 grid-col-1 gap-x-10
            items-center
            pr-8 pl-8 pt-28 pb-6
            lg:pr-28 lg:pl-28">
                <div className="
                hero-header 
                flex md:flex-col 
                mb-10 mt-5">
                    <h1 className="
                    xl:text-8xl lg:text-7xl text-6xl font-bold text-left">
                        Hello,
                        <br />
                        I'm Mahir
                        Ashhab
                    </h1>
                </div>
                <div className="hero-para">
                    <p className="
                    text-justify md:text-lg text-base font-light">
                        I am a fresh graduate and I look forward to start my career
                        with dedication and sincerity towards my objective. I am
                        always energetic and eager to learn new things. I am always
                        motivated and honest towards my work. With a proper scope
                        I believe to uphold myself and make use of every opportunity.
                    </p>
                </div>
                <div className="
                pt-6 
                flex">
                    <a href={cv}
                        download="Mahir_Ashhab_CV">
                        <button className="
                        cv 
                        p-4 pl-8 pr-8 
                        md:text-lg text-base uppercase
                        bg-red-300
                        hover:bg-red-400
                        hover:text-white"
                            type="submit">
                            Download CV
                        </button>
                    </a>
                </div>
                <div className="
                icon-container
                pt-6 
                grid grid-cols-3 gap-4">
                    <div className="
                    text-base
                    font-bold 
                    uppercase
                    text-center
                    flex">
                        <a
                            href="https://www.facebook.com/mahir.ashhab.71/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                            w-16
                            pt-1 pb-1
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
                            w-16
                            pt-1 pb-1
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
                            w-16
                            pt-1 pb-1
                            border-2 border-zinc-400">
                            li.
                        </a>
                    </div>
                </div>
            </div >
        </StyleDiv>

    );
};

export default Hero;