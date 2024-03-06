import React from 'react'

const Education = () => {
    return (
        <div className='w-full flex items-center justify-between'>
            <div>
                <h2 className='text-xl md:text-3xl font-bold'>Bachelor's of Engineering</h2>
                <span className='text-lg text-[#adb7b3] font-semibold'>Computer Engineering | Honours: Data Science and Machine Learning</span>
                <p className='text-base text-[#adb7b3] font-semibold'>Savitribai Phule Pune University</p>
            </div>
            <div className='text-[#adb7b3] font-semibold'>
                <span className='block'>Jan 2021 - May 2024</span>
                <span className='block w-full text-right'>8.93 CGPA</span>
            </div>
        </div>
    )
}

export default Education;
