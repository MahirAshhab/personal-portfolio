import React from 'react';
import { FaBootstrap, FaReact } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';

const Framework = () => {
    return (
        <div className="
        languages-main-container
        pr-28 pl-28 
        mb-20
        text-left">
            <h1 className="
            text-6xl font-bold
            mb-16
            flex
            justify-end">
                Frameworks
            </h1>
            <div className="
            grid grid-cols-3 gap-x-6
            text-8xl">
                <div className="
                flex
                justify-center">
                    <FaBootstrap className="text-violet-500" />
                </div>
                <div className="
                flex
                justify-center">
                    <FaReact className="text-sky-400" />
                </div>
                <div className="
                flex
                justify-center">
                    <SiTailwindcss className="text-sky-500" />
                </div>
            </div>
        </div >
    );
};

export default Framework;