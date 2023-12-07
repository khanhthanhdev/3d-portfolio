import React from 'react'
import { Link } from 'react-router-dom'
import { arrow } from '../assets/icons'

const InfoBox = ({ text, link, btnText}) => (
    <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>{text}</p>
        <Link to={link} className='neo-brutalism-white neo-btn'>
            {btnText}
            <img src={arrow} className='w-4 h-4 object-contain' />
        </Link>
    </div>
)

const renderContent = {
    1: (
        <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
            Hi, My name's <span className='font-semibold'>Kevin Tr</span>
            <br/>
            A high school student from <span className='font-semibold'>Vietnam</span>
        </h1>
    ),
    2: (
        <InfoBox 
            text="Have passion STEAM and Robotics, worked with many organizations and clubs, learned many skills, knowledge "
            link="/about"
            btnText="See more"
        />
    ),
    3: (
        <InfoBox 
            text="Have many projects and achievements, won many awards, and have many experiences in Robotics and Web. Want to see them ?"
            link="/projects"
            btnText="Check my portfolio"
        />
    ),
    4: (
        <InfoBox 
            text="Need a contact or want to know more about me ?"
            link="/contact"
            btnText="Let's talk"
        />
    ),
}


const HomeInfo = ({currentStage}) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo