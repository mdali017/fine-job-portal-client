import React, { useEffect, useState } from 'react';
import FeauredJobCard from '../FeaturedJobCard/FeauredJobCard';

const FeaturedJob = () => {
    const [jobSample, setJobSample] = useState([]);
     useEffect(() =>{
        fetch('fakeData.json')
        .then(res => res.json())
        .then(data => setJobSample(data))
     }, [])
    return (
        <div>
           <div className='mb-12'>
                 <h1 className='text-4xl font-semibold mb-4 mt-12'>Featured Jobs</h1>
                 <p>Explore thousands of job opportunities with all the information you need. Its your future</p>

           </div>
           <div className='grid grid-cols-2 gap-9'>
               {
                jobSample.slice(0,4).map(job => <FeauredJobCard 
                    key={job.id}
                    job={job}
                    ></FeauredJobCard>)
               }
           </div>
        </div>
    );
};

export default FeaturedJob;