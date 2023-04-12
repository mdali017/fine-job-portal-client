import React from 'react';
import { useLoaderData } from 'react-router-dom';
import JobD from './JobD';
import ReviewJobs from '../ReviewJobs/ReviewJobs';
// import JobId from './jobId';


const AppliedJob = () => {
    const jobId = useLoaderData();
    console.log(jobId)
    
    return (
        <div>
             <div className='border bg-indigo-300 h-80 mb-24'>
                <h1 className='mt-40 text-3xl  font-extrabold tracking-wide'>Applied Job</h1>
            </div>
            <div>
                <h1>Total Apply: {jobId.length}</h1>
                <div className=''>
                    {
                        jobId.map(RJ => <ReviewJobs 
                            key={RJ.id}
                            RJ = {RJ}
                            ></ReviewJobs>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AppliedJob;