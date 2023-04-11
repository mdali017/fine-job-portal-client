import React from 'react';
import { useNavigate } from 'react-router-dom';

const JobD = ({job}) => {
    // console.log(job)
    const {id, index, salary} = job;
    const navigate = useNavigate()
    const handle = () =>{
        navigate(`job/${jobmdId}`)
    }
    return (
        <div className='border p-4 m-5'>
            <h1>{id}</h1>
            <p>{index}</p>
            <p>{salary}</p>
            <button onClick={() => handle} className='border bg-amber-600 px-2 mt-4'>show more</button>
        </div>
    );
};

export default JobD;