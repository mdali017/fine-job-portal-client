import React from 'react';
import { useLoaderData } from 'react-router-dom';
import JobD from './JobD';
// import JobId from './jobId';


const AppliedJob = () => {
    const jobId = useLoaderData();
    // console.log(jobId)
    
    return (
        <div>
            <h1>This is Applied Job Page</h1>
            <div>
                {
                    // jobId.map(job => console.log(job))
                    jobId.map(job => <JobD 
                        key={job.id}
                        job={job}
                        ></JobD>)
                }
            </div>
        </div>
    );
};

export default AppliedJob;