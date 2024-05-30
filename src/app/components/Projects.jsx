import Image from 'next/image';
import React from 'react'
import ProjectCard from './ProjectCard';

const projectsDetails = [
    {
        name: "Ecommerce App",
        image: "/images/projects/ecommerce-app.webp",
        demoLink: "https://ecommerce-clothing-ui.vercel.app",
        githubLink: "https://github.com/yugal82/ecommerce-backend",
        skills: ["ReactJs", "Redux", "NodeJS", "ExpressJS", "MongoDB", "PassportJS", "Tailwind CSS", "Postman"]
    },
    {
        name: "New York Taxi Fare prediction",
        image: "/images/projects/nyc-taxi.webp",
        demoLink: "",
        githubLink: "https://github.com/yugal82/Machine-Learning/blob/master/Projects/NYC_Taxi_fare_prediction.ipynb",
        skills: ["Python", "Pandas", "Numpy", "Sklearn", "Fetaure Engineering", "Random Forest"]
    },
    {
        name: "Potato Disease Classification",
        image: "/images/projects/potato-disease.webp",
        demoLink: "",
        githubLink: "https://github.com/yugal82/Deep-Learning/tree/master/Project/Potato-Disease",
        skills: ["Python", "Pandas", "Numpy", "Tensorflow", "Keras", "CNN", "Matplotlib", "Deep learning"]
    },
    {
        name: 'Medical AI - Dataset publication',
        image: '/images/projects/dataset.webp',
        demoLink: 'https://data.mendeley.com/datasets/ywnjr7gnty/1',
        githubLink: '',
        skills: ['Python', 'ML', 'Deep Learning', 'Computer Vision', 'Image registration', 'Data Preprocessing']
    },
    {
        name: 'Dekrypt',
        image: '/images/projects/dekrypt.webp',
        demoLink: 'https://dekrypt.vercel.app/',
        githubLink: 'https://github.com/yugal82/BE-Project-Client',
        skills: ['Javascript', 'Solidity', 'ReactJs', 'NodeJS', 'ExpressJS', 'MongoDB', 'Blockchain', 'Ethereum', 'ethers.js', 'TailwindCSS', 'Smart Contracts', 'Postman']
    },
    {
        name: 'BookMyTour',
        image: '/images/projects/bookmytour.webp',
        demoLink: 'https://bookmytour.vercel.app/',
        githubLink: 'https://github.com/yugal82/Natuors-MERN',
        skills: ['NodeJS', 'ExpressJS', 'MongoDB', 'Mongoose', 'REST Api', 'JWT Token', 'Pug', 'Postman']
    },
    {
        name: 'House price prediction using ML',
        image: '/images/projects/house-prediction.webp',
        demoLink: '',
        githubLink: 'https://github.com/yugal82/Machine-Learning/tree/master/Projects/Project-1',
        skills: ['Python', 'ML', 'Regression', 'Pandas', 'Matplotlib', 'Scikit-Learn']
    },
    {
        name: 'Cryptopedia',
        image: '/images/projects/cryptopedia.webp',
        demoLink: 'https://cryptopeedia.netlify.app/',
        githubLink: 'https://github.com/yugal82/Crypto-Currency-Tracker',
        skills: ['Javascript', 'ReactJs', 'Material UI', 'CoinGecko API', 'Axios']
    },
    {
        name: 'Krypto Vault',
        image: '/images/projects/krypto-vault.webp',
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
