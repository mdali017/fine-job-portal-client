import React, { useEffect, useState } from 'react';
import FeauredJobCard from '../FeaturedJobCard/FeauredJobCard';

const FeaturedJob = () => {
    const [jobSample, setJobSample] = useState([]);
    const [jobSampleTwo, setJobSampleTwo] = useState([]);
     useEffect(() =>{
        fetch('fakeData.json')
        .then(res => res.json())
        .then(data => setJobSample(data))
     }, [])
     useEffect(() =>{
        fetch('fakeData.json')
        .then(res => res.json())
        .then(data => setJobSampleTwo(data))
     }, [])

     const showMoreButton = () =>{
        
     }

     if(jobSample.length >4){
        jobSample.slice(0, 4)
    }else{
        showMoreButton(jobSample)
    }

     

    return (
        <div>
           <div className='mb-12'>
                 <h1 className='text-4xl font-extrabold mb-4 mt-12'>Featured Jobs</h1>
                 <p>Explore thousands of job opportunities with all the information you need. Its your future</p>

           </div>
           <div className='grid lg:grid-cols-2 gap-9'>
               {/* {
                jobSample.map(job => <FeauredJobCard 
                    key={job.id}
                    job={job}
                    ></FeauredJobCard>)
               } */}
               {
                jobSample.map(job => {
                    return(
                        <FeauredJobCard 
                    key={job.id}
                    job={job}
                    ></FeauredJobCard>
                    )
                })
               }
               <button onClick={() => showMoreButton(jobSample)} className='p-3 font-bold button-style mt-24 '>Show More</button>
           </div>
           
           <div className='grid lg:grid-cols-2 gap-9'>
               {/* {
                jobSampleTwo.map(job => <FeauredJobCard 
                    key={job.id}
                    job={job}
                    showMore={showMoreButton}
                    ></FeauredJobCard>)
               }
                */}
           </div>
           
        </div>
    );
};

export default FeaturedJob;