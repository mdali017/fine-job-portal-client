import React from 'react';

const JobsCategoryCard = ({jobcategorylist}) => {
    // console.log(jobcategorylist)
    const {name, icon, avaiableJob} = jobcategorylist;
    return (
        <div className=' mx-auto mt-16'>
            <div className='border p-5 m-5 h-40 w-60'>
                <img className='h-12' src={icon} alt="" />
                <h2 className='text-xl font-semibold mt-7'>{name}</h2>
                <p className='text-lg text-slate-500'>{avaiableJob}</p>
            </div>
        </div>
    );
};

export default JobsCategoryCard;