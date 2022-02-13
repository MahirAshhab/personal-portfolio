import React from 'react';
import { ImFacebook2, ImLinkedin, ImGithub } from 'react-icons/im';
import './hero.css';

const Hero = () => {
    return (
        <div className="
        hero-container
        grid grid-cols-2 gap-x-10
        items-center
        pr-28 pl-28 pt-10 pb-10">
            <div className="
            hero-header 
            flex flex-col 
            justify-center">
                <h1 className="
                text-8xl font-bold text-left">
                    Hello,
                    <br />
                    I,m Mahir
                    <br />
                    Ashhab
                </h1>
            </div>
            <div className="hero-para">
                <p className="
                text-justify text-lg font-light">
                    A Sydney based frontend designer, working and living in Australia. I love to work on anything code, from designing simple HTML pages to solving complex problems. I love to illustrate as well. Recetly I won the award for best portfolio. Download the CV to know more about my background.
                </p>
            </div>
            <div className="
            pt-6 
            flex">
                <button className="
                cv 
                p-4 pl-8 pr-8 
                text-lg uppercase">
                    Download CV
                </button>
            </div>
            <div className="
            icon-container
            pt-6 
            grid grid-cols-3 gap-4">
                <a
                    href="https://www.facebook.com/mahir.ashhab.71/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                    pr-6">
                    <ImFacebook2 className="
                    text-2xl" />
                </a>
                <a
                    href="https://github.com/MahirAshhab/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                    flex
                    justify-center
                    pr-6">
                    <ImGithub className="
                    text-2xl" />
                </a>
                <a
                    href="https://www.linkedin.com/in/mahir-ashhab77/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                    flex
                    justify-end">
                    <ImLinkedin className="
                    text-2xl" />
                </a>
            </div>
        </div>
    );
};

export default Hero;