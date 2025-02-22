"use client";
import React from 'react'
import styled from 'styled-components'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import ExperienceCard from './ExperienceCard';

const experiences = [
    {
        id: 0,
        img: "/images/experience/usc-logo.webp",
        role: "Graduate Student Researcher",
        company: "University of Southern California",
        date: "Oct 2024 - Present",
        desc: "Currently, working on CulturalPersonas, a research project focused on developing a culturally grounded benchmark for evaluating personality representations in large language models (LLMs). This work addresses the Western bias in traditional personality assessments by leveraging Retrieval-Augmented Generation (RAG) and human validation to create scenario-based, culture-specific evaluations across diverse global contexts. Through this research, I aim to improve AI fairness, cultural adaptability, and personalized AI interactions for a more inclusive and representative AI landscape.",
        skills: [
            "Python",
            "Generative AI",
            "LLM",
            "RAG",
            "Langchain",
            "OpenAI API",
            "FAISS"
        ]
    },
    {
        id: 1,
        img: "/images/experience/viit-logo.webp",
        role: "Research Intern",
        company: "Vishwakarma Institute of Information Technology",
        date: "Sep 2023 - Feb 2024",
        desc: "Working on the applications of Deep Learning to auto-design Patient Specific Implants (PSI) using Generative Adversarial Networks (GANs) on MUG500+(B) Dataset. Under the guidance of Dr. Parikshit Mahalle.",
        skills: [
            "Python",
            "Keras",
            "TensorFlow",
            "NRRD",
            "Computer Vision",
            "Neural Networks",
            "ANTs Image Registration",
            "Data Preprocessing",
            "Jupyter Notebook",
        ]
    },
    {
        id: 2,
        img: "/images/experience/pointSix-logo.webp",
        role: "Software Developer Intern",
        company: "Pointsix Labs",
        date: "Sep 2022 - May 2023",
        desc: "At Pointsix, I developed a React.js-based NFT marketplace, improving user experience and boosting daily active users by 25%. I proposed and implemented an incentivized reward system, attracting 20,000+ users in the first month. I also designed and optimized smart contracts for NFT transactions, reducing gas fees, and built REST APIs that improved response times by 40%. Collaborating with stakeholders, I helped drive user engagement and platform growth.",
        skills: [
            "ReactJS",
            "Zustand",
            "TailwindCSS",
            "NodeJs",
            "ExpressJS",
            "MongoDB",
            "JavaScript",
            "Solidity",
            "ethers.js",
            "Blockchain",
            "Hardhat"
        ],
    },
];


const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
`;

const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1350px;
    padding: 60px 0;
    gap: 12px;
    @media (max-width: 960px) {
        flex-direction: column;
    }
`;

const TimelineSection = styled.div`
    width: 100%;
    max-width: 1000px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
`;



const Experience = () => {
    return (
        <Container id="experience" className='mt-12 md:mt-24'>
            <Wrapper>
                <div>
                    <h2 className='text-white text-4xl font-bold'>Experience</h2>
                </div>
                <TimelineSection>
                    <Timeline>
                        {experiences.map((experience, index) => (
                            <TimelineItem key={index}>
                                <TimelineSeparator>
                                    <TimelineDot variant="outlined" color="primary" />
                                    {index !== experiences.length - 1 && <TimelineConnector style={{ background: '#09A6F3' }} />}
                                </TimelineSeparator>
                                <TimelineContent sx={{ py: '12px', px: 2 }}>
                                    <ExperienceCard experience={experience} />
                                </TimelineContent>
                            </TimelineItem>
                        ))}
                    </Timeline>

                </TimelineSection>
            </Wrapper>
        </Container>
    )
}

export default Experience;
