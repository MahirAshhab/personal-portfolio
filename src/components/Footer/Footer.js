import React from 'react';

import { FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';
import styled from 'styled-components';

const StyledDiv = styled.div`
    .footer-nav ul li a{
        transition: 0.3s;
    }
    
    .medias a{
        transition: 0.3s;
    }
`;

const Footer = () => {
    return (
        <StyledDiv>
            <div className="Footer 
            pr-8 pl-8 pb-16 pt-16
            lg:pr-28 lg:pl-28
            mt-16
            bg-zinc-500
            text-white">
                <div className="title 
                pt-6 pb-6">
                    <h1 className="xl:text-6xl md:text-5xl text-4xl
                    font-bold uppercase">mahir ashhab
                    </h1>
                </div>

                <div className="medias 
                flex justify-center 
                pt-6 pb-6 
                text-4xl">
                    <a
                        href="https://www.facebook.com/mahir.ashhab.71/"
                        className="hover:text-orange-200">
                        <FaFacebook />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/mahir-ashhab77/"
                        className="sm:ml-40 sm:mr-40 ml-16 mr-16
                        hover:text-orange-200">
                        <FaLinkedin />
                    </a>
                    <a
                        href="https://github.com/MahirAshhab/"
                        className="hover:text-orange-200">
                        <FaGithub />
                    </a>
                </div>

                <div className="copyright 
                sm:text-base text-sm 
                pt-6
                uppercase font-extralight">
                    <h1>
                        &copy; 2022 Mahir Ashhab. <br /> All rights researved
                    </h1>
                </div>
            </div >
        </StyledDiv>
    );
};

export default Footer;