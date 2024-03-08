import Image from 'next/image';
import React from 'react'

const ProjectCard = ({ project, skills }) => {
    // console.log(skills);
    return (
        <div className='cursor-pointer bg-[#383838] rounded-xl'>
            <div className='relative w-full h-48 rounded-t-xl group' style={{ background: `url(${project?.image})`, backgroundPosition: 'center', backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
                <div className='absolute w-full h-full top-0 left-0 bg-[#181818] bg-opacity-0 hidden group-hover:flex items-center justify-center group-hover:bg-opacity-80 transition-all duration-300 ease-in-out'>
                    <div className='px-2 grid grid-cols-3 gap-x-3 gap-y-1'>
                        {skills?.map((skill, index) => (
                            <span key={index} className='text-sm text-center text-white font-semibold px-2 py-1 rounded-lg mr-1'>{skill}</span>
                        ))}
                    </div>
                </div>
            </div>
            <div className='py-3 px-4'>
                <span className='block py-1 text-lg text-[#adb7b3] font-semibold'>{project?.name}</span>
                <div className='text-[#adb7b3] mt-2'>
                    {
                        project?.githubLink && <a href={project?.githubLink}>
                            <span className='hover:text-white py-2 px-3 bg-[#282828] hover:bg-[#383838] cursor-pointer rounded-xl font-semibold mr-2'>Github</span>
                        </a>
                    }
                    {
                        project?.demoLink && <a href={project?.demoLink}>
                            <span className='hover:text-white py-2 px-3 bg-[#282828] hover:bg-[#383838] cursor-pointer rounded-xl font-semibold'>Live link</span>
                        </a>
                    }
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;