import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Footer from '../Footer/Footer';
import { addToDb } from '../../utilities/fakedb';

const JobDetails = () => {
    const { id } = useParams();
    // console.log(id)
    // const jobDetails = useLoaderData()

    // const allD = useLoaderData()

    const [details, setDetails] = useState([])
    // const [targetData, setTargetData] = useState([])
    console.log(details)
    const { jobDescription, jobResponsibility, EducationalRequirements, Experiences, postName, phone, email, location, salary } = details
    // useEffect(() =>{
    //     fetch('/fakeData.json')
    //     .then(res => res.json())
    //     .then(data => setDetails(data))
    // },[])
    useEffect(() => {
        fetch('/fakeData.json')
            .then(res => res.json())
            .then(data => {
                const findjob = data.find(sblog => sblog.id === id)
                setDetails(findjob);
            })
    }, [])

    // useEffect(() => {
    //     const findjob = details.find(sblog => sblog.id === id)
    //     setTargetData(findjob);
    //     console.log(targetData.salary)
    // },[details])

    const handleApplyButton = (id) =>{
        console.log("clicked")
        addToDb(id)
    }



    return (
        <div className=''>
            <div className='border bg-indigo-300 h-80 mb-24'>
                <h1 className='mt-40 text-3xl  font-extrabold tracking-wide'>Job Details</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2'>
                <div className='text-left'>
                    <h1><span className='text-lg font-bold'>Job Description:</span> {jobDescription}</h1>
                    <h1><span className='text-lg font-bold'>Job Responsibility:</span> {jobResponsibility}</h1>
                    <p className='mt-12 text-left'><span className='text-lg font-bold'>Educational Requirements:</span>Bachelor degree to complete any reputational university.</p>
                    <h1 className='text-left mt-5'><span className='text-lg font-bold '>Experiences:</span> <br /> {Experiences}</h1>
                </div>
                <div className='bg-blue-300 rounded-lg p-6 w-80 mx-auto'>
                    <h1 className='text-xl font-bold text-left border-b p-3 mb-8'>Job Details</h1>
                    <p className='text-left'><span className='text-lg font-semibold '>Salary:</span> {salary}</p>
                    <p className='text-left'><span className='text-lg font-semibold '>Job Title:</span> {postName}</p>
                    <h1 className='text-xl font-bold text-left border-b p-3 mb-12'>Contact Information</h1>
                    <div className='text-left'>
                        <p><span className='text-lg font-semibold '>Phone:</span> {phone}</p>
                        <p><span className='text-lg font-semibold '>Email:</span> {email}</p>
                        <p><span className='text-lg font-semibold '>Address:</span> {location}</p>
                    </div>
                    <button onClick={() => handleApplyButton(id)} className='p-3 font-bold button-style mt-5'>Apply Now </button>
                </div>
                
            </div>
            <Footer></Footer>
        </div>

    );
};

export default JobDetails;