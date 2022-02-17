import React from 'react';
import styled from 'styled-components';
import { FaGlobe, FaGithub, FaInfoCircle } from 'react-icons/fa';
import project01 from '../../images/project01.jpg';
import project02 from '../../images/project02.jpg';
import project03 from '../../images/project03.jpg';

const Projects = () => {
    const StyledDiv = styled.div`
        .project-items{
            color: white;
        }
        
        .icon{
            transition: 0.5s;
        }
    `;

    return (
        <StyledDiv>
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
                grid grid-cols-1 
                lg:grid-cols-2 
                gap-x-6 gap-y-16">
                    <div className="
                    project-items
                    bg-red-200
                    overflow-hidden">
                        <div className="
                        grid grid-cols-3">
                            <div className="
                            group
                            pt-4
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
                            pt-4
                            flex
                            justify-center">
                                <FaGlobe className="
                                icon
                                hover:text-red-400
                                text-4xl">
                                </FaGlobe>
                            </div>
                            <div className="
                            pt-4
                            flex
                            justify-center">
                                <FaInfoCircle className="
                                icon
                                hover:text-red-400
                                text-4xl">
                                </FaInfoCircle>
                            </div>
                        </div>
                        <img src={project01} className="p-6" alt="" />
                    </div>
                    <div className="
                    project-items
                    bg-red-200
                    overflow-hidden">
                        <div className="
                        grid grid-cols-3">
                            <div className="
                            group
                            pt-4
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
                            pt-4
                            flex
                            justify-center">
                                <FaGlobe className="
                                icon
                                hover:text-red-400
                                text-4xl">
                                </FaGlobe>
                            </div>
                            <div className="
                            pt-4
                            flex
                            justify-center">
                                <FaInfoCircle className="
                                icon
                                hover:text-red-400
                                text-4xl">
                                </FaInfoCircle>
                            </div>
                        </div>
                        <img src={project02} className="p-6" alt="" />
                    </div>
                    <div className="
                    project-items
                    bg-red-200
                    overflow-hidden">
                        <div className="
                        grid grid-cols-3">
                            <div className="
                            group
                            pt-4
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
                            pt-4
                            flex
                            justify-center">
                                <FaGlobe className="
                                icon
                                hover:text-red-400
                                text-4xl">
                                </FaGlobe>
                            </div>
                            <div className="
                            pt-4
                            flex
                            justify-center">
                                <FaInfoCircle className="
                                icon
                                hover:text-red-400
                                text-4xl">
                                </FaInfoCircle>
                            </div>
                        </div>
                        <img src={project03} className="p-6" alt="" />
                    </div>
                </div>
            </div >
        </StyledDiv>
    );
};

export default Projects;