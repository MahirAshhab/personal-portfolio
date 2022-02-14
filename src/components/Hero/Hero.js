import React from 'react';
import './hero.css';
import cv from '../../cv/Mahir_Ashhab_CV.pdf'

const Hero = () => {
    return (
        <div className="
        hero-container
        grid md:grid-cols-2 grid-col-1 gap-x-10
        items-center
        pr-8 pl-8 pt-6 pb-6
        md:pr-28 md:pl-28 md:pt-6 md:pb-6">
            <div className="
            hero-header 
            flex md:flex-col 
            mb-10 mt-5">
                <h1 className="
                xl:text-8xl lg:text-7xl text-6xl font-bold text-left">
                    Hello,
                    <br />
                    I,m Mahir
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
                    md:text-lg text-base uppercase"
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
        </div >
    );
};

export default Hero;