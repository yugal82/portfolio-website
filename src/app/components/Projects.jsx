import Image from 'next/image';
import React from 'react'
import ProjectCard from './ProjectCard';

const projectsDetails = [
    {
        name: 'Medical AI - Dataset publication',
        image: '/images/projects/dataset.jpg',
        demoLink: 'https://data.mendeley.com/datasets/ywnjr7gnty/1',
        githubLink: '',
        skills: ['Python', 'ML', 'Deep Learning', 'Computer Vision', 'Image registration', 'Data Preprocessing']
    },
    {
        name: 'Dekrypt',
        image: '/images/projects/dekrypt.jpg',
        demoLink: 'https://dekrypt.vercel.app/',
        githubLink: 'https://github.com/yugal82/BE-Project-Client',
        skills: ['Javascript', 'Solidity', 'ReactJs', 'NodeJS', 'ExpressJS', 'MongoDB', 'Blockchain', 'Ethereum', 'ethers.js', 'TailwindCSS', 'Smart Contracts', 'Postman']
    },
    {
        name: 'BookMyTour',
        image: '/images/projects/bookmytour.jpg',
        demoLink: 'https://bookmytour.vercel.app/',
        githubLink: 'https://github.com/yugal82/Natuors-MERN',
        skills: ['NodeJS', 'ExpressJS', 'MongoDB', 'Mongoose', 'REST Api', 'JWT Token', 'Pug', 'Postman']
    },
    {
        name: 'House price prediction using ML',
        image: '/images/projects/house-prediction.jpg',
        demoLink: '',
        githubLink: 'https://github.com/yugal82/Machine-Learning/tree/master/Projects/Project-1',
        skills: ['Python', 'ML', 'Regression', 'Pandas', 'Matplotlib', 'Scikit-Learn']
    },
    {
        name: 'Cryptopedia',
        image: '/images/projects/cryptopedia.jpg',
        demoLink: 'https://cryptopeedia.netlify.app/',
        githubLink: 'https://github.com/yugal82/Crypto-Currency-Tracker',
        skills: ['Javascript', 'ReactJs', 'Material UI', 'CoinGecko API', 'Axios']
    },
    {
        name: 'Krypto Vault',
        image: '/images/projects/krypto-vault.jpg',
        demoLink: '',
        githubLink: 'https://github.com/yugal82/Blockchain-App',
        skills: ['Javascript', 'Solidity', 'ReactJs', 'Blockchain', 'Ethereum', 'ethers.js', 'TailwindCSS', 'Smart Contracts']
    }
]

const Projects = () => {
    return (
        <div id='projects' className='container mx-auto px-12 py-4 mt-12'>
            <div>
                <h2 className='text-white text-center text-4xl font-bold'>Projects</h2>
            </div>
            <div className='mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-6'>
                {
                    projectsDetails?.map((project, index) => (
                        <ProjectCard key={index} project={project} skills={project.skills} />
                    ))
                }
            </div>
        </div>
    )
}

export default Projects;
