import React from 'react';
import styled from 'styled-components';
import project01 from '../../images/project01.png';
import project02 from '../../images/project02.png';
import project03 from '../../images/project03.png';
import project04 from '../../images/project04.png';
import project05 from '../../images/project05.jpg';

const StyledDiv = styled.div`
    .project-items{
        box-shadow: 5px 5px 15px 5px rgb(158, 158, 158, 0.6);
    }

    .project-link a{
        transition: 0.5s;
    }        
`;

const Projects = () => {
    return (
        <StyledDiv>
            <div className="
            project-container
            pr-8 pl-8 pt-16
            lg:pr-28 lg:pl-28
            pb-16
            text-left">
                <h1 className="
                xl:text-6xl md:text-5xl text-4xl font-bold uppercase
                mb-16">
                    Projects
                </h1>
                <div className="
                grid grid-cols-1 
                lg:grid-cols-2 
                gap-x-10 gap-y-16">

                    {/* Project 01 */}
                    <div className="
                    project-items
                    overflow-hidden">
                        <img src={project01}
                            className="w-fit"
                            alt="Project 01" />

                        <div className="project-details">
                            <div className="project-title">
                                <h1 className="
                                text-xl md:text-2xl font-bold uppercase
                                pt-4 pl-4 pr-4">
                                    Quiz App
                                </h1>
                            </div>

                            <div className="project-description">
                                <p className="
                                text-base md:text-xl font-medium uppercase
                                pt-6 pl-4 pr-4 pb-4">
                                    A quiz app built using HTML5, CSS3 and JavaScript
                                </p>
                            </div>

                            <div className="project-link pb-1">
                                <div className="flex p-4">
                                    <div className="">
                                        <a className="
                                            text-base md:text-xl font-normal
                                            pl-3 pr-3 pt-1 pb-1
                                            bg-red-300
                                            hover:bg-red-400 
                                            text-white
                                            cursor-pointer"
                                            href="https://github.com/MahirAshhab/Quiz-App-JS"
                                            target="_blank"
                                            rel="noopener noreferrer">
                                            GitHub
                                        </a>
                                    </div>
                                    <div className="pl-4">
                                        <a className="
                                            text-base md:text-xl font-normal
                                            pl-3 pr-3 pt-1 pb-1
                                            bg-red-300
                                            hover:bg-red-400 
                                            text-white
                                            cursor-pointer"
                                            href="https://quiz-app-77.netlify.app/"
                                            target="_blank"
                                            rel="noopener noreferrer">
                                            Live Site
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Project 02 */}
                    <div className="
                    project-items
                    overflow-hidden">
                        <img src={project02}
                            className="w-fit"
                            alt="Project 02" />

                        <div className="project-details">
                            <div className="project-title">
                                <h1 className="
                                text-xl md:text-2xl font-bold uppercase
                                pt-4 pl-4 pr-4">
                                    Signup/Login Form
                                </h1>
                            </div>

                            <div className="project-description">
                                <p className="
                                text-base md:text-xl font-medium uppercase
                                pt-6 pl-4 pr-4 pb-4">
                                    A signup/login form with dark/light mode toggle built using React.js, Styled Components and React Router Dom.
                                </p>
                            </div>

                            <div className="project-link pb-1">
                                <div className="flex p-4">
                                    <div className="">
                                        <a className="
                                            text-base md:text-xl font-normal
                                            pl-3 pr-3 pt-1 pb-1
                                            bg-red-300
                                            hover:bg-red-400 
                                            text-white
                                            cursor-pointer"
                                            href="https://github.com/MahirAshhab/Signup-Login-Form"
                                            target="_blank"
                                            rel="noopener noreferrer">
                                            GitHub
                                        </a>
                                    </div>
                                    <div className="pl-4">
                                        <a className="
                                            text-base md:text-xl font-normal
                                            pl-3 pr-3 pt-1 pb-1
                                            bg-red-300
                                            hover:bg-red-400 
                                            text-white
                                            cursor-pointer"
                                            href="https://mahirashhab.github.io/Signup-Login-Form/#/"
                                            target="_blank"
                                            rel="noopener noreferrer">
                                            Live Site
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Project 03 */}
                    <div className="
                    project-items
                    overflow-hidden">
                        <img src={project03}
                            className="w-fit"
                            alt="Project 03" />

                        <div className="project-details">
                            <div className="project-title">
                                <h1 className="
                                text-xl md:text-2xl font-bold uppercase
                                pt-4 pl-4 pr-4">
                                    Weather App
                                </h1>
                            </div>

                            <div className="project-description">
                                <p className="
                                text-base md:text-xl font-medium uppercase
                                pt-6 pl-4 pr-4 pb-4">
                                    A weather app built using React.js, Tailwind CSS and OpenWeatherMap API.
                                </p>
                            </div>

                            <div className="project-link pb-1">
                                <div className="flex p-4">
                                    <div className="">
                                        <a className="
                                            text-base md:text-xl font-normal
                                            pl-3 pr-3 pt-1 pb-1
                                            bg-red-300
                                            hover:bg-red-400 
                                            text-white
                                            cursor-pointer"
                                            href="https://github.com/MahirAshhab/Weather-App"
                                            target="_blank"
                                            rel="noopener noreferrer">
                                            GitHub
                                        </a>
                                    </div>
                                    <div className="pl-4">
                                        <a className="
                                            text-base md:text-xl font-normal
                                            pl-3 pr-3 pt-1 pb-1
                                            bg-red-300
                                            hover:bg-red-400 
                                            text-white
                                            cursor-pointer"
                                            href="https://weather-app-77.netlify.app/"
                                            target="_blank"
                                            rel="noopener noreferrer">
                                            Live Site
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Project 04 */}
                    <div className="
                    project-items
                    overflow-hidden">
                        <img src={project04}
                            className="w-fit"
                            alt="Project 04" />

                        <div className="project-details">
                            <div className="project-title">
                                <h1 className="
                                text-xl md:text-2xl font-bold uppercase
                                pt-4 pl-4 pr-4">
                                    Simple Calculator
                                </h1>
                            </div>

                            <div className="project-description">
                                <p className="
                                text-base md:text-xl font-medium uppercase
                                pt-6 pl-4 pr-4 pb-4">
                                    A simple calculator built using HTML5, CSS3 and JavaScript
                                </p>
                            </div>

                            <div className="project-link pb-1">
                                <div className="flex p-4">
                                    <div className="">
                                        <a className="
                                            text-base md:text-xl font-normal
                                            pl-3 pr-3 pt-1 pb-1
                                            bg-red-300
                                            hover:bg-red-400 
                                            text-white
                                            cursor-pointer"
                                            href="https://github.com/MahirAshhab/Simple-Calculator-JS"
                                            target="_blank"
                                            rel="noopener noreferrer">
                                            GitHub
                                        </a>
                                    </div>
                                    <div className="pl-4">
                                        <a className="
                                            text-base md:text-xl font-normal
                                            pl-3 pr-3 pt-1 pb-1
                                            bg-red-300
                                            hover:bg-red-400 
                                            text-white
                                            cursor-pointer"
                                            href="https://simple-calculator-77.netlify.app/"
                                            target="_blank"
                                            rel="noopener noreferrer">
                                            Live Site
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Project 05 */}
                    <div className="
                    project-items
                    overflow-hidden">
                        <img src={project05}
                            className="w-fit"
                            alt="Project 04" />

                        <div className="project-details">
                            <div className="project-title">
                                <h1 className="
                                text-xl md:text-2xl font-bold uppercase
                                pt-4 pl-4 pr-4">
                                    Advanced LF RC Car
                                </h1>
                            </div>

                            <div className="project-description">
                                <p className="
                                text-base md:text-xl font-medium uppercase
                                pt-6 pl-4 pr-4 pb-4">
                                    A Line Following (LF) Remote Controlled (RC) Car that can find the shortest possible path to the destination.
                                </p>
                            </div>

                            <div className="project-link pb-1">
                                <div className="flex p-4">
                                    <div className="">
                                        <a className="
                                            text-base md:text-xl font-normal
                                            pl-3 pr-3 pt-1 pb-1
                                            bg-red-300
                                            hover:bg-red-400 
                                            text-white
                                            cursor-pointer"
                                            href="https://github.com/MahirAshhab/Simple-Calculator-JS"
                                            target="_blank"
                                            rel="noopener noreferrer">
                                            GitHub
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </StyledDiv>
    );
};

export default Projects;