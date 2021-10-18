import React from 'react'

function AwardComponent(props) {
    return (
        <div className="w-96 border-4 rounded-lg border-opacity-0 filter drop-shadow-lg m-8 bg-white
        transition duration-500 ease-in-out hover:border-opacity-100 hover:border-blue-900">
            <div className="flex flex-row p-8">
                <div className=''>
                    <img src={props.info.urlImage} alt="gambar projek" className=" bg-white w-20 border rounded-lg object-cover"/>
                </div>
                
                <div className='pl-5 text-left'>
                    <h1 className='font-bold text-left'>{props.info.title}</h1>
                    <div className='text-justify'>{props.info.desc}</div>
                </div>
            </div>
        </div>
    )
}

export default AwardComponent
