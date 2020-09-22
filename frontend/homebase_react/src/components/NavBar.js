import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function BootstrapNavbar() {
    return(
        <div className="navbar-container">
            <nav>
                <div className="logo">
                    <a className="logo-link" href="."> HOMEBASE </a>
                </div>
                <div className="site-links">
                    <ul>
                        <li>
                            <a 
                            className="hoverable" 
                            href="./todo"  
                            rel="noopener noreferrer">
                                <FontAwesomeIcon icon={['fas', 'list']} />
                            </a>
                        </li>
                        <li>
                            <a 
                            className="hoverable" 
                            href="https://reddit.com" 
                            target="_blank" 
                            rel="noopener noreferrer">
                                <FontAwesomeIcon icon={['fab', 'reddit-alien']} />
                            </a>
                        </li>
                        <li>
                            <a 
                            className="hoverable" 
                            href="https://www.youtube.com" 
                            target="_blank" 
                            rel="noopener noreferrer">
                                <FontAwesomeIcon icon={['fab', 'youtube']} />
                            </a>
                        </li>
                        <li>
                            <a 
                            className="hoverable" 
                            href="https://www.twitch.tv" 
                            target="_blank" 
                            rel="noopener noreferrer">
                                <FontAwesomeIcon icon={['fab', 'twitch']} />
                            </a>
                        </li>
                        <li>
                            <a 
                            className="hoverable" 
                            href="https://www.github.com" 
                            target="_blank" 
                            rel="noopener noreferrer">
                                <FontAwesomeIcon icon={['fab', 'github']} />
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )   
}

export default BootstrapNavbar;