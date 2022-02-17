import React from 'react';
import { FaHtml5, FaCss3Alt, FaJava } from 'react-icons/fa';
import { SiCplusplus, SiJavascript } from 'react-icons/si';

const Programming = () => {
    return (
        <div className="
        pr-8 pl-8 pt-16
        lg:pr-28 lg:pl-28
        mb-16
        text-left">
            <h1 className="
            xl:text-6xl text-5xl font-bold
            mb-16
            text-right">
                Programming Languages
            </h1>
            <div className="
            grid grid-cols-1 gap-x-6 gap-y-10
            sm:grid-cols-2
            md:grid-cols-3
            text-8xl">
                <div className="
                flex
                justify-center">
                    <FaHtml5 className="text-red-500" />
                </div>
                <div className="
                flex
                justify-center">
                    <FaCss3Alt className="text-sky-500" />
                </div>
                <div className="
                flex
                justify-center">
                    <FaJava className="text-orange-500" />
                </div>
                <div className="
                flex
                justify-center">
                    <SiJavascript className="text-yellow-500" />
                </div>
                <div className="hidden md:block">

                </div>
                <div className="
                flex
                justify-center">
                    <SiCplusplus className="text-blue-600" />
                </div>
            </div>
        </div>
    );
};

export default Programming;