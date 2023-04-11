import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const JobDetails = () => {
    // const {salary} = useParams()
    // console.log(salary)
    // const jobDetails = useLoaderData()

    // const allD = useLoaderData()

    const [details, setDetails] = useState([])
    console.log(details)
    useEffect(() =>{
        fetch('/fakeData.json')
        .then(res => res.json())
        .then(data => setDetails(data))
    },[])
    


    return (
        <div className=''>
            <h1>This is Job Details Page</h1>
        </div>
    );
};

export default JobDetails;