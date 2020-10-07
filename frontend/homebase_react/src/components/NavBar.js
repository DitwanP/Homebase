import React, { Component } from 'react'
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class NavBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            show: true,
            scrollPos: 0
        };
        this.handleScroll = this.handleScroll.bind(this);
    }
    
    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }
    
    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }
    
    handleScroll() {
        const { scrollPos } = this.state;
        this.setState({
            scrollPos: document.body.getBoundingClientRect().top,
            show: document.body.getBoundingClientRect().top > scrollPos
        });
    }

    render(){
        return(
            <Transition>
                <StyledNavbar className={this.state.show ? "active" : "hidden"}>
                    <div className="logo">
                        <h1 className="brand"> HOMEBASE </h1>
                    </div>
                    <div className="site-links">
                        <ul>
                            <li>
                                <a 
                                title="Reddit"
                                className="hoverable" 
                                href="https://reddit.com" 
                                target="_blank" 
                                rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={['fab', 'reddit-alien']} />
                                </a>
                            </li>
                            <li>
                                <a 
                                title="YouTube"
                                className="hoverable" 
                                href="https://www.youtube.com" 
                                target="_blank" 
                                rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={['fab', 'youtube']} />
                                </a>
                            </li>
                            <li>
                                <a 
                                title="Twitch"
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
                </StyledNavbar>
            </Transition>
    )}   
}
const Transition = styled.div`
.active {
    visibility: visible;
    transition: all 200ms ease-in;
}
.hidden {
    visibility: hidden;
    transition: all 200ms ease-out;
    transform: translate(0, -100%);
}
`;
const StyledNavbar = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100%;
margin: 0 auto;
height: 6rem;
background-color: rgba(0, 0, 0, 0.7);
z-index: 1000;

ul {
    line-height: 6rem;
    list-style: none;
    overflow: hidden;
    color: #fff;
    text-align: right;
    margin: 0.7rem 7.6rem;
    transition: 1s;
}

ul li {
    display: inline-block;
}

ul li a {
    text-decoration: none;
    color: #fff;
    font-size: 2.6rem;
    margin-left: 2rem;
}

.brand {
    font-family: 'Montserrat', sans-serif;
    line-height: 60px;
    float: left;
    margin: 0rem 6.6rem;
    color: #fff;
    font-weight: normal;
    font-size: 2.2rem;
    letter-spacing: 3px;
}
`;