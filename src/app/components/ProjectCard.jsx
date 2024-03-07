import Image from 'next/image';
import React from 'react'

const ProjectCard = ({ project }) => {
    return (
        <div className='cursor-pointer bg-[#383838] py-4 px-3 rounded-xl'>
            <Image className='w-full h-36 rounded-xl' src={project?.image} width={300} height={0} />
            <span className='block py-1 text-lg text-[#adb7b3] font-semibold mt-1'>{project?.name}</span>
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
    )
}

export default ProjectCard;