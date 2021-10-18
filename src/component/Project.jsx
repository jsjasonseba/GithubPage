import React from 'react'
import ProjectComponent from './ProjectComponent.jsx'
import gradIcon from './images/graduation-hat-and-diploma.png'
import teamingIcon from './images/logoTeaming.jpg'
import newsIcon from './images/newscate.png'
import delIcon from './images/delluna.png'
import portoIcon from './images/profile.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

function Project() {
    const project1 = {
        title: 'Graduate Admission Prediction',
        desc: 'Predicting chance of graduate admission using regression model',
        urlImage: gradIcon,
        projectRepo: 'https://github.com/jsjasonseba/AdmissionPrediction',
        repoText: 'visit repository',
    };

    const project2 = {
        title: 'News Categorization',
        desc: 'Categorizing news using fine-tuned BERT',
        urlImage: newsIcon,
        projectRepo: 'https://github.com/jsjasonseba/NewsCategorization',
        repoText: 'visit repository',
    };

    const project3 = {
        title: 'Teaming',
        desc: 'Web-app for finding people to play sport, hangout, game, and more',
        urlImage: teamingIcon,
        projectLink: 'https://teaming-teal.vercel.app/dashboard',
        projectRepo: 'https://github.com/SaPH17/timing',
        projectText: 'visit project',
        repoText: 'visit repository',
    };

    const project4 = {
        title: 'Portofolio Website',
        desc: 'My portofolio website built using react',
        urlImage: portoIcon,
        projectLink: 'https://jsjasonseba.github.io',
        projectRepo: 'https://github.com/jsjasonseba/jsjasonseba.github.io',
        projectText: 'visit project',
        repoText: 'visit repository',
    };

    const project5 = {
        title: 'Del Luna',
        desc: 'School group project. K-Pop merchandise site built using HTML,CSS, and JS.',
        urlImage: delIcon,
        projectLink: 'https://jsjasonseba.github.io/DelLuna/',
        projectRepo: 'https://github.com/jsjasonseba/DelLuna',
        projectText: 'visit project',
        repoText: 'visit repository',
    };

    return (
        
        <div className="flex flex-col items-center pd-12">
            <h1 className="font-bold text-3xl p-5">Projects</h1>
            <a href="https://github.com/jsjasonseba?tab=repositories">
                <div className="flex flex-row p-5 bg-white rounded-lg filter drop-shadow-lg
                flex flex-row items-center bg-gray-200
                transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                    <FontAwesomeIcon icon={faGithub} className='fa-5x'/>
                    <div className='pl-8 pr-8'>
                        <div className='font-semibold'>
                            Check out all my projects on Github
                        </div>
                        <div className='font-bold underline'>jsjasonseba</div> 
                    </div>
                </div>
            </a>
            
            
            <div className='flex flex-wrap justify-evenly'>
                <ProjectComponent info={project1} className='m-8'/>
                <ProjectComponent info={project2} className='m-8'/>
                <ProjectComponent info={project3} className='m-8'/>
                <ProjectComponent info={project4} className='m-8'/>
                <ProjectComponent info={project5} className='m-8'/>
            </div>
            
        </div>
    )
}

export default Project
