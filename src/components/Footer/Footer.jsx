import React from 'react';
import { BeakerIcon, AcademicCapIcon } from '@heroicons/react/24/solid'

const Footer = () => {
    return (
        <div className='grid lg:grid-cols-4 bottom-0 py-16 border mx-auto justify-between  mt-20 bg-black text-white'>
            <div className=''>
                <h1 className='text-xl font-bold mb-4'>Find Your Jobs</h1>
                <p>There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>
                <div className='flex gap-2 justify-center mt-3'>
                <AcademicCapIcon className="h-6 w-6 text-blue-500" />
                <AcademicCapIcon className="h-6 w-6 text-blue-500" />
                <AcademicCapIcon className="h-6 w-6 text-blue-500" />
                <AcademicCapIcon className="h-6 w-6 text-blue-500" />
                </div>
            </div>
            <div>
                <h1>Company</h1>
                <div className='inline-grid'>
                    <a href="#">About Us</a>
                    <a href="#">Work</a>
                    <a href="#">Latest News</a>
                    <a href="#">Careers</a>
                </div>
            </div>
            <div>
                <h1>Product</h1>
                <div className='inline-grid'>
                    <a href="#">Prototype</a>
                    <a href="#">Plans & Pricing</a>
                    <a href="#">Customers</a>
                    <a href="#">Integrations</a>
                </div>
            </div>
            <div>
                <h1>Support</h1>
                <div className='inline-grid'>
                    <a href="#">Help Desk</a>
                    <a href="#">Sales</a>
                    <a href="#">Become a Partner</a>
                    <a href="#">Developers</a>
                </div>
            </div>
            
            
        </div>
    );
};

export default Footer;