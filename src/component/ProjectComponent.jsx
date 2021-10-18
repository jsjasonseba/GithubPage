import React from 'react'

function ProjectComponent(props) {
    // const props = {
        // urlImage: null,
        // title : "Title",
        // desc : "lorem",
        // contrib : "contibution",
        // urlRepo: null,
        // urlSite: null,
    // }
    return (
        <div className="w-96 border-4 rounded-lg border-opacity-0 filter drop-shadow-lg m-8 bg-white
        transition duration-500 ease-in-out hover:border-opacity-100 hover:border-blue-900">
            <div className="flex flex-row p-8">
                <div className='w-24 object-cover'>
                    <img src={props.info.urlImage} alt="gambar projek" className="border rounded-lg w-24 h-24 object-cover object-top"/>
                </div>
                <div className='pl-8 text-left w-60'>
                    <h1 className='font-bold text-left'>{props.info.title}</h1>
                    <div className='text-left'>{props.info.desc}</div>
                    <br/>
                    <div>
                        <a href={props.info.projectLink} className='underline'>{props.info.projectText}</a>
                    </div>
                    <div>
                        <a href={props.info.projectRepo} className='underline'>{props.info.repoText}</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectComponent
