import Image from 'next/image';
import React from 'react'

const certificates = [
    {
        name: 'Coursera Machine Learning',
        image: '/images/certificates/Coursera-Machine-Learning.jpg',
        link: 'https://drive.google.com/file/d/1TVdohbThVQLj8UP8z4xsualTMLpjuJyd/view?usp=sharing'
    },
    {
        name: 'Supervised Machine Learning: Regression and Classification',
        image: '/images/certificates/Machine-Learning-Regression-Classification.jpg',
        link: 'https://drive.google.com/file/d/1uTktBXLj8_-PWFLcJHwgRxK8q5mRxX6F/view?usp=drive_link'
    },
    {
        name: 'Unsupervised Learning, Recommenders, Reinforcement Learning',
        image: '/images/certificates/Machine-Learning-Unsupervised.jpg',
        link: 'https://drive.google.com/file/d/1Mdln5ObTngXbDvO_b5NgZ_UpyGtu2Jlo/view?usp=sharing'
    },
    {
        name: 'Machine Learning A-Z',
        image: '/images/certificates/Udemy-Machine-Learning-Certificate.jpg',
        link: 'https://drive.google.com/file/d/1rOnxYtNlktbVv0sQyRh5fWeUqPiGNoz7/view?usp=drive_link'
    },
    {
        name: 'Nodejs Expressjs MongoDB - The Complete Bootcamp 2023',
        image: '/images/certificates/Udemy-Node-Express-Mongo-Certificate.jpg',
        link: 'https://drive.google.com/file/d/1bYPC9wX8Snb5SZODQ9ZQomrkOFZzInCr/view?usp=drive_link'
    },
    {
        name: 'Ethereum and Solidity - The Complete Developer Guide',
        image: '/images/certificates/Udemy-Solidity-Ethereum-Certificate.jpg',
        link: 'https://drive.google.com/file/d/1dXhQIW0wWpYrdFBiVQfJ4BUtLwsBmWNG/view?usp=drive_link'
    },
]

// bg-gradient-to-r from-[#09A6F3] via-[#0B74EA] to-[#0D41E1]
const Certifications = () => {
    return (
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {
                certificates.map((certificate) => (
                    <a href={certificate?.link} target='_blank' rel='noreferrer' className='cursor-pointer hover:scale-105 transition-all duration-200 ease-in-out bg-[#282828] hover:bg-[#383838]  rounded-xl'>
                        <div className='p-2'>
                            <Image className='w-full max-h-48 rounded-xl' src={certificate?.image} width={400} height={0} />
                            <p className='my-2 pl-2 text-base font-semibold'>{certificate?.name}</p>
                        </div>
                    </a>
                ))
            }
        </div>
    )
}

export default Certifications;
