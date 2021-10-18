import React from 'react'

function ProgSkillComponent(props) {
    return (
        <div className="w-96 h-40 border-4 rounded-lg border-opacity-0 filter drop-shadow-lg m-2 bg-white
        transition duration-500 ease-in-out hover:border-opacity-100 hover:border-blue-900
        flex flex-row p-2 items-center justify-center">
                <div className='px-2'>
                    <img src={props.info.urlImage} alt="gambar language" className=" bg-white w-20 "/>
                </div>
                
                <div className='pl-5 text-left w-3/4'>
                    <h1 className='font-bold text-left'>{props.info.language}</h1>
                    <ul className='list-inside list-disc'>
                    {props.info.skill.map(d => 
                        <li>{d}</li>
                    )} 
                    </ul>
                    
            </div>
        </div>
    )
}

export default ProgSkillComponent
