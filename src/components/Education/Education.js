import React from 'react';
import './Education.css';

const Education = () => {
    return (
        <div className="
        education-main-container
        pr-8 pl-8
        md:pr-28 md:pl-28
        mt-16
        text-left">
            <h1 className="
            lg:text-6xl text-5xl font-bold
            mb-16">
                Education
            </h1>
            <div className="
            education-container
            grid gap-4 lg:gap-y-16
            mb-16">

                {/* BRAC UNIVERSITY */}

                <div className="
                flex flex-col">
                    <h1 className="
                    text-2xl font-semibold uppercase">
                        BRAC University
                    </h1>
                    <p className="
                    text-xl font-semibold uppercase">
                        2016 - 2021
                    </p>
                </div>
                <div className="
                flex flex-col
                lg:mb-0 mb-10">
                    <h1 className="
                    text-2xl font-semibold uppercase">
                        Bachelor of Science in Computer Science and Engineering
                    </h1>
                    <p className="
                    text-xl font-semibold uppercase">
                        cgpa 3.30
                        <span className="font-normal italic">
                            (out of 4.00)
                        </span>
                    </p>
                </div>

                {/* BCIC COLLEGE */}

                <div className="
                flex flex-col">
                    <h1 className="
                    text-2xl font-semibold uppercase">
                        bcic college
                    </h1>
                    <p className="
                    text-xl font-semibold uppercase">
                        2014 - 2016
                    </p>
                </div>
                <div className="
                flex flex-col
                lg:mb-0 mb-10">
                    <h1 className="
                    text-2xl font-semibold uppercase">
                        Higher Secondary Certificate
                    </h1>
                    <p className="
                    text-xl font-semibold uppercase">
                        cgpa 5.00
                        <span className="font-normal italic">
                            (out of 5.00)
                        </span>
                    </p>
                </div>

                {/* DHANMONDI BOYS" HIGH SCHOOL */}

                <div className="
                flex flex-col">
                    <h1 className="
                    text-2xl font-semibold uppercase">
                        dhanmondi boys' high school
                    </h1>
                    <p className="
                    text-xl font-semibold uppercase">
                        2012 - 2014
                    </p>
                </div>
                <div className="
                flex flex-col">
                    <h1 className="
                    text-2xl font-semibold uppercase">
                        Secondary School Certificate
                    </h1>
                    <p className="
                    text-xl font-semibold uppercase">
                        cgpa 5.00
                        <span className="font-normal italic">
                            (out of 5.00)
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Education;