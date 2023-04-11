import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import allData from '/fakeData.json'

const JobMD = () => {
    const [allData, setAllData] = useState([])
    const [sData, setSData] = useState([])
    const {jobmdId} = useParams();
    // console.log(jobmdId);

    // console.log(sData)

    useEffect(() =>{
        fetch('/fakeData.json')
        .then(res => res.json())
        .then(data => setAllData(data))
        
    }, [])
    
    useEffect(() => {
        const td = allData.find(std => std.id === jobmdId);
        console.log(td)
        // setSData(td)
        // console.log(sData)
    }, [])
    // console.log(sData)
    // const {id, name}  = sData
    //   console.log(allData)
    return (
        <div>
            <h1>JobMD</h1>
            {/* <h1>{id}</h1> */}
        </div>
    );
};

export default JobMD;