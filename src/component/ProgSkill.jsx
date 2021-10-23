import React from 'react'
import ProgSkillComponent from './ProgSkillComponent.jsx'
import pythonIcon from './images/python.png'
import javaIcon from './images/java.png'
import cIcon from './images/c.png'
import htmlIcon from './images/html5.png'
import reactIcon from './images/react.png'
import sqlIcon from './images/sql.png'
import laravelIcon from './images/laravel.png'

function ProgSkill() {
    const prog1 = {
        urlImage: cIcon,
        language: 'C/C++',
        skill: ['Algorithm','Data Structures','Competitive Programming'],
    }
    const prog2 = {
        urlImage: javaIcon,
        language: 'Java',
        skill: ['Object Oriented Programming'],
    }
    const prog3 = {
        urlImage: pythonIcon,
        language: 'Python',
        skill: ['Machine Learning(Keras)','Neural Networks(Pytorch)','Computer Vision(OpenCV)','NLP'],
    }
    const prog4 = {
        urlImage: sqlIcon,
        language: 'MySQL',
        skill: ['Database Query'],
    }
    const prog5 = {
        urlImage: htmlIcon,
        language: 'HTML/CSS/JS',
        skill: ['Front-end Web Development'],
    }
    const prog6 = {
        urlImage: reactIcon,
        language: 'React',
        skill: ['Front-end Web Development'],
    }
    const prog7 = {
        urlImage: laravelIcon,
        language: 'Laravel',
        skill: ['Full Stack Web Development'],
    }
    return (
        <div>
            <div className=" flex flex-col items-center">
                <h1 className="font-bold text-3xl p-5">Programming Skills</h1>
                
                <div className='flex flex-wrap justify-evenly'>
                    <ProgSkillComponent info={prog6} className='m-2'/>
                    <ProgSkillComponent info={prog5} className='m-2'/>
                    <ProgSkillComponent info={prog3} className='m-2'/>
                    <ProgSkillComponent info={prog7} className='m-2'/>
                    <ProgSkillComponent info={prog2} className='m-2'/>
                    <ProgSkillComponent info={prog1} className='m-2'/>
                    <ProgSkillComponent info={prog4} className='m-2'/>
                </div>
            </div>
        </div>
    )
}

export default ProgSkill
