import React from 'react'
import AwardComponent from './AwardComponent.jsx'
import ICPClogo from './images/ICPC_International_Collegiate_Programming_Contest_logo,_Aug_2018.png'
import FIlogo from './images/Main__Logo-47b2ff86e295cc31bdbc8205b64f2c94.png'

function AchievementAwards() {
    const award1 = {
        urlImage: ICPClogo,
        title:  'The 2020 ICPC Asia Jakarta Regional Contest',
        desc: 'National Silver Medalist',
    };

    const award2 = {
        urlImage: FIlogo,
        title:  'Find IT! UGM 2021 - Competitive Programming',
        desc: 'Juara 3',
    };
    return (
        <div>
            <div className=" flex flex-col items-center">
                <h1 className="font-bold text-3xl p-5">Achievements & Awards</h1>
                
                <div className='flex flex-wrap justify-evenly'>
                    <AwardComponent info={award1} className='m-8'/>
                    <AwardComponent info={award2} className='m-8'/>
                </div>
            </div>
        </div>
    )
}

export default AchievementAwards
