import React, { useEffect, useState } from 'react';
import JobsCategoryCard from '../JobsCategoryCard/JobsCategoryCard';

const JobCategory = () => {
    const [jobCategory, setJobCategory] = useState([])

    useEffect(() =>{
        fetch('fakeCategoryData.json')
        .then(res => res.json())
        .then(data => setJobCategory(data))
    },[])
    return (
        <div className='mt-36'>
            <h1 className='text-4xl font-extrabold mb-4  '>Job Category List</h1>
            <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                 {
                    jobCategory.map(jobcategorylist => <JobsCategoryCard 
                        key={jobcategorylist.id}
                        jobcategorylist={jobcategorylist}
                        ></JobsCategoryCard>)
                 }
            </div>
        </div>
    );
};

export default JobCategory;