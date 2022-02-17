import React from 'react';
import './Projects.css';
import project01 from '../../images/project01.jpg';
import project02 from '../../images/project02.jpg';
import project03 from '../../images/project03.jpg';
import { FaGlobe, FaGithub, FaInfoCircle } from 'react-icons/fa';

const Projects = () => {
    return (
        <div className="
        project-container
        pr-8 pl-8 pt-16
        lg:pr-28 lg:pl-28
        pb-16
        text-left">
            <h1 className="
            xl:text-6xl text-5xl font-bold
            mb-16">
                Projects
            </h1>
            <div className="
            grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-16">
                <div className="
                shadow-2xl shadow-zinc-400
                project-items
                overflow-hidden">
                    <div className="
                    grid grid-cols-3">
                        <div className="
                        group
                        pb-6 pt-6
                        lg:pb-8 lg:pt-8
                        grid
                        justify-items-center
                        relative">
                            <FaGithub className="
                            icon
                            hover:text-red-400
                            text-4xl">
                            </FaGithub>
                        </div>
                        <div className="
                        pb-6 pt-6
                        lg:pb-8 lg:pt-8
                        flex
                        justify-center">
                            <FaGlobe className="
                            icon
                            hover:text-red-400
                            text-4xl">
                            </FaGlobe>
                        </div>
                        <div className="
                        pb-6 pt-6
                        lg:pb-8 lg:pt-8
                        flex
                        justify-center">
                            <FaInfoCircle className="
                            icon
                            hover:text-red-400
                            text-4xl">
                            </FaInfoCircle>
                        </div>
                    </div>
                    <img src={project01} className="" alt="" />
                </div>
                <div className="
                shadow-2xl shadow-zinc-400
                project-items
                overflow-hidden">
                    <div className="
                    grid grid-cols-3">
                        <div className="
                        group
                        pb-6 pt-6
                        lg:pb-8 lg:pt-8
                        grid
                        justify-items-center
                        relative">
                            <FaGithub className="
                            icon
                            hover:text-red-400
                            text-4xl">
                            </FaGithub>
                        </div>
                        <div className="
                        pb-6 pt-6
                        lg:pb-8 lg:pt-8
                        flex
                        justify-center">
                            <FaGlobe className="
                            icon
                            hover:text-red-400
                            text-4xl">
                            </FaGlobe>
                        </div>
                        <div className="
                        pb-6 pt-6
                        lg:pb-8 lg:pt-8
                        flex
                        justify-center">
                            <FaInfoCircle className="
                            icon
                            hover:text-red-400
                            text-4xl">
                            </FaInfoCircle>
                        </div>
                    </div>
                    <img src={project02} className="" alt="" />
                </div>
                <div className="
                shadow-2xl shadow-zinc-400
                project-items
                overflow-hidden">
                    <div className="
                    grid grid-cols-3">
                        <div className="
                        group
                        pb-6 pt-6
                        lg:pb-8 lg:pt-8
                        grid
                        justify-items-center
                        relative">
                            <FaGithub className="
                            icon
                            hover:text-red-400
                            text-4xl">
                            </FaGithub>
                        </div>
                        <div className="
                        pb-6 pt-6
                        lg:pb-8 lg:pt-8
                        flex
                        justify-center">
                            <FaGlobe className="
                            icon
                            hover:text-red-400
                            text-4xl">
                            </FaGlobe>
                        </div>
                        <div className="
                        pb-6 pt-6
                        lg:pb-8 lg:pt-8
                        flex
                        justify-center">
                            <FaInfoCircle className="
                            icon
                            hover:text-red-400
                            text-4xl">
                            </FaInfoCircle>
                        </div>
                    </div>
                    <img src={project03} className="" alt="" />
                </div>

            </div>
        </div >
    );
};

export default Projects;