import React from 'react';
import { FaBootstrap, FaReact } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';

const Framework = () => {
    return (
        <div className="
        pr-8 pl-8 pt-16
        lg:pr-28 lg:pl-28
        pb-16
        text-left">
            <h1 className="
            xl:text-6xl md:text-5xl text-4xl font-bold uppercase
            mb-16
            text-right">
                Frameworks
            </h1>
            <div className="
            grid grid-cols-1 gap-x-6 gap-y-10
            sm:grid-cols-2
            md:grid-cols-3
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