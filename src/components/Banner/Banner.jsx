import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 justify-center items-center mx-5 my-16'>
                <div>
                    <h1 className='text-4xl lg:text-7xl md:text-6xl font-bold banner-title '>One Step <br /> Closer To Your <span>Dream Job</span></h1>
                    <p>Explore thousands of job opportunities with all the information you need. Its your future. Come find it.
                         Manage all your job application from start to finish.
                    </p>
                    <button className='p-3 font-bold button-style mt-5'>Get Started </button>
                </div>
                <img className='  md:h-full md:w-auto md:mt-6' src="/src/assets/All Images/P3OLGJ1 copy 1.png" alt="" />
            </div>
        </div>
    );
};

export default Banner;