import Image from 'next/image';
import React from 'react'

const certificates = [
    {
        name: 'Coursera Machine Learning',
        image: '/images/certificates/Coursera-Machine-Learning.jpg',
        link: ''
    },
    {
        name: 'Supervised Machine Learning: Regression and Classification',
        image: '/images/certificates/Machine-Learning-Regression-Classification.jpg',
        link: ''
    },
    {
        name: 'Unsupervised Learning, Recommenders, Reinforcement Learning',
        image: '/images/certificates/Machine-Learning-Unsupervised.jpg',
        link: ''
    },
    {
        name: 'Machine Learning A-Z',
        image: '/images/certificates/Udemy-Machine-Learning-Certificate.jpg',
        link: ''
    },
    {
        name: 'Nodejs Expressjs MongoDB - The Complete Bootcamp 2023',
        image: '/images/certificates/Udemy-Node-Express-Mongo-Certificate.jpg',
        link: ''
    },
    {
        name: 'Ethereum and Solidity - The Complete Developer Guide',
        image: '/images/certificates/Udemy-Solidity-Ethereum-Certificate.jpg',
        link: ''
    },
]

const Certifications = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
        <Image className='cursor-pointer hover:scale-105 transition-all duration-200 ease-in-out rounded-xl' src='/images/certificates/Udemy-Solidity-Ethereum-Certificate.jpg' width={400} height={300} />
        <Image className='cursor-pointer hover:scale-105 transition-all duration-200 ease-in-out rounded-xl' src='/images/certificates/Udemy-Solidity-Ethereum-Certificate.jpg' width={400} height={300} />
        <Image className='cursor-pointer hover:scale-105 transition-all duration-200 ease-in-out rounded-xl' src='/images/certificates/Udemy-Solidity-Ethereum-Certificate.jpg' width={400} height={300} />
    </div>
  )
}

export default Certifications;
