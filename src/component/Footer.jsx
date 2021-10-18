import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"

function Footer() {
    return (
        <div className="bg-gray-500 filter drop-shadow-lg h-24">
            <div className="flex flex-col justify-between">
                <div className="flex flex-row justify-center">
                    <a href="https://github.com/jsjasonseba/" className="w-16 pt-4"><FontAwesomeIcon icon={faGithub} className='fa-2x text-white'/></a>
                    <a href="https://www.linkedin.com/in/jason-sebastian-822935212/" className="w-16 pl-8 pt-4"><FontAwesomeIcon icon={faLinkedin} className='fa-2x text-white'/></a>
                </div>
                
                <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> and <a href="https://iconscout.com">Iconscout</a></div>
            </div>
            
        </div>
    )
}

export default Footer
