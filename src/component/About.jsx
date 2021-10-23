import React from 'react'
import profile from './images/profile.jpg'

function About() {
    return (
        <div className="flex flex-row items-center bg-gray-100 filter drop-shadow-lg w-80 sm:w-100">
            <div className='hidden sm:block'>
                <img src={profile} alt="ProfilePicture" className="w-52"/>
            </div>
            <div className="text-justify p-8 sm:w-4/6 pl-8">
                <div className="font-bold text-3xl">About</div>
                <div className='bg-black w-24 h-1 my-2'></div>
                <br />
                <p>Hi, I'm Jason Sebastian Kusuma. I'm currently 
                    an undergraduate student of Binus University majoring in Computer Science. 
                    I'm also an active member of Jollybee Binus Competitive Programming Team.
                    I have a great curiosity 
                    and desire to learn about Computer Science especially in Artificial Intelligence.</p>
            </div>
            
        </div>
    )
}

export default About
