import React from 'react'

const Education = () => {
    return (
        <>
        <div className='w-full md:flex items-center justify-between'>
            <div>
                <h2 className='text-xl md:text-3xl font-bold'>Master&apos;s of Science</h2>
                <span className='text-base md:text-lg text-[#adb7b3] font-semibold'>Computer Science</span>
                <p className='text-base text-[#adb7b3] font-semibold'>University of Southern California, Los Angeles</p>
            </div>
            <div className=' text-[#adb7b3] font-normal md:font-semibold'>
                <span className='block'>Aug 2024 - May 2026</span>
                <span className='block w-full md:text-right'>GPA: --/4</span>
            </div>
        </div>
        <div className='w-full md:flex items-center justify-between my-4'>
            <div>
                <h2 className='text-xl md:text-3xl font-bold'>Bachelor&apos;s of Engineering</h2>
                <span className='text-base md:text-lg text-[#adb7b3] font-semibold'>Computer Engineering | Honours: Data Science</span>
                <p className='text-base text-[#adb7b3] font-semibold'>Savitribai Phule Pune University</p>
            </div>
            <div className=' text-[#adb7b3] font-normal md:font-semibold'>
                <span className='block'>Jan 2021 - May 2024</span>
                <span className='block w-full md:text-right'>CGPA: 9.05/10</span>
            </div>
        </div>
        </>
    )
}

export default Education;
