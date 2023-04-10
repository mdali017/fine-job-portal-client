import React from 'react';

const FeauredJobCard = ({job}) => {
    console.log(job);
    const {picture, postName, company, location} = job;
    return (
        <div>
            <div className='border p-10'>
                <img className='w-28 h-10' src={picture} alt="" />
                <h1>{postName}</h1>
                <h1>{company}</h1>
            </div>
        </div>
    );
};

export default FeauredJobCard;