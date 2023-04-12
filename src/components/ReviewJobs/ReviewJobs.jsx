import React from 'react';
import { Link } from 'react-router-dom';

const ReviewJobs = ({RJ}) => {
    console.log(RJ)
    const {picture, postName, company, jobStatus, location, salary} = RJ
    return (
        <div>
           
            <div>
            <div className='border p-10 mb-8 '>
                <img className='w-28 h-10' src={picture} alt="" />
                <h1 className='text-left mt-3 text-xl font-semibold text-gray-600'>{postName}</h1>
                <h1 className='text-left mt-1 text-slate-600 font-bold'>{company}</h1>
                <div className='flex gap-7 text-left mt-4'>
                    <h1 className='border px-4 py-1 font-bold text-purple-600'>{jobStatus[0]}</h1>
                    <h1 className='border px-4 py-1 font-bold text-purple-600'>{jobStatus[1]}</h1>
                </div>
                <div className='flex gap-14'>
                    <div className='flex items-center gap-3 mt-4'>
                        {/* <MapPinIcon className="h-6 w-6 text-gray-500" /> */}
                        <p className='text-left font-semibold text-gray-600 tracking-wide text-xl'>{location[0]}</p>
                    </div>
                    <div className='flex items-center gap-3 mt-4'>
                        {/* <CurrencyDollarIcon className="h-6 w-6 text-gray-500" /> */}
                        <p className='text-left font-semibold text-gray-600 tracking-wide text-xl'>{salary}</p>
                    </div>
                </div>
                <div className='text-right'>
                    <Link ><button className='p-3 font-bold button-style mt-5 '>View Details</button></Link>
                </div>
            </div>
            </div>
        </div>
    );
};

export default ReviewJobs;