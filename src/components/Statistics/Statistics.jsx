import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Statistics = () => {
    const assignmentMark = [
        { id: 1, name: 'HTML-CSS', marks: '15' },
        { id: 2, name: 'Responsive', marks: '52' },
        { id: 3, name: 'CSS-Frame', marks: '60' },
        { id: 4, name: 'JavaScript', marks: '40' },
        { id: 5, name: 'JavaScript', marks: '58' },
        { id: 6, name: 'JavaScript', marks: '30' },
        { id: 6, name: 'Debug', marks: '45' },
        { id: 6, name: 'Simple React', marks: '50' }
      ];

      const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
      };
      
      const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;
      
        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
      };

    return (
        <div>
            <div className='border bg-indigo-300 h-80 mb-24'>
                <h1 className='mt-40 text-3xl  font-extrabold tracking-wide'>My Assignment Report</h1>
            </div>
            <h1 className='text-left'>Result Chart:</h1>
            <div className='grid justify-center w-full '>
            
                <BarChart
                width={500}
                height={300}
                data={assignmentMark}
                >
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip></Tooltip>
                <Bar dataKey='marks' shape={<TriangleBar />}></Bar>
                </BarChart>
                <h1 className='text-blue-800 font-bold mt-12'>Cart: Assignment Mark</h1>
                
            </div>
        </div>
    );
};

export default Statistics;