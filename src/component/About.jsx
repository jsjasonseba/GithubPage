import React from 'react'
import profile from './images/profile.jpg'

function About() {
    return (
        <div className="flex flex-row items-center bg-gray-100 w-1/2 filter drop-shadow-lg">
            <div>
                <img src={profile} alt="ProfilePicture" className="w-52"/>
            </div>
            <div className="w-4/6 text-justify pl-8">
                <div className="font-bold text-3xl">About</div>
                <div className='bg-black w-12 h-px my-2'></div>
                <br />
                <p>Hi, I'm Jason Sebastian Kusuma. I'm currently 
                    an undergraduate student of Binus University majoring in Computer Science. 
                    I'm an active member of Jollybee Binus Competitive Programming Team.
                    I have a great curiosity 
                    and desire to learn about Computer Science.</p>
            </div>
            
        </div>
    )
}

export default About
