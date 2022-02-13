import React from 'react';
import { FaHtml5, FaCss3Alt, FaJava } from 'react-icons/fa';
import { SiCplusplus, SiJavascript } from 'react-icons/si';

const Programming = () => {
    return (
        <div className="
        languages-main-container
        pr-28 pl-28 pt-20
        mb-20
        text-left">
            <h1 className="
            text-6xl font-bold
            mb-16
            flex
            justify-end">
                Programming Languages
            </h1>
            <div className="
            grid grid-cols-5 gap-x-6
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