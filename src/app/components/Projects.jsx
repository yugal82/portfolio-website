import Image from 'next/image';
import React from 'react'
import ProjectCard from './ProjectCard';

const projectsDetails = [
    {
        name: 'Medical AI - Dataset publication',
        image: '/images/projects/dataset.jpg',
        demoLink: 'https://data.mendeley.com/datasets/ywnjr7gnty/1',
        githubLink: '',
    },
    {
        name: 'Dekrypt',
        image: '/images/projects/dekrypt.jpg',
        demoLink: 'https://dekrypt.vercel.app/',
        githubLink: 'https://github.com/yugal82/BE-Project-Client',
    },
    {
        name: 'BookMyTour',
        image: '/images/projects/bookmytour.jpg',
        demoLink: 'https://bookmytour.vercel.app/',
        githubLink: 'https://github.com/yugal82/Natuors-MERN',
    },
    {
        name: 'House price prediction using ML',
        image: '/images/projects/house-prediction.jpg',
        demoLink: '',
        githubLink: 'https://github.com/yugal82/Machine-Learning/tree/master/Projects/Project-1',
    },
    {
        name: 'Cryptopeedia',
        image: '/images/projects/cryptopedia.jpg',
        demoLink: 'https://cryptopeedia.netlify.app/',
        githubLink: 'https://github.com/yugal82/Crypto-Currency-Tracker',
    },
    {
        name: 'Krypto Vault',
        image: '/images/projects/krypto-vault.jpg',
        demoLink: '',
        githubLink: 'https://github.com/yugal82/Blockchain-App',
    }
]

const Projects = () => {
    return (
        <div className='container mx-auto px-12 py-4 mt-12'>
            <div>
                <h2 className='text-white text-4xl font-bold'>Projects</h2>
            </div>
            <div className='mt-6 grid grid-cols-1 md:grid-cols-3 gap-4'>
                {
                    projectsDetails?.map((project) => (
                        <ProjectCard project={project} />
                    ))
                }
            </div>
        </div>
    )
}

export default Projects;
