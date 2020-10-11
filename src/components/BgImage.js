import React, { Component } from 'react';
import {animateScroll as scroll} from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const windowWidth = window.screen.width * window.devicePixelRatio
const windowHeight = window.screen.height * window.devicePixelRatio

export default class BgImage extends Component {
    render() {
        return (
            <div>
                <div className="BgImage">
                    <img src={`https://source.unsplash.com/${windowWidth}x${windowHeight}/daily?fall`} alt=''></img>
                </div>
                <button className="go-to-todolist-button" onClick={() => scroll.scrollToBottom()} aria-label="scroll to bottom of page">
                    <FontAwesomeIcon icon={['fas', 'chevron-down']} />
                </button>
                <button className="go-to-top-button" onClick={() => scroll.scrollToTop()} aria-label="scroll to bottom of page">
                    <FontAwesomeIcon icon={['fas', 'chevron-up']} />
                </button>
                <div className="BgImage2">
                    <img src={`https://source.unsplash.com/${windowWidth}x${windowHeight}/daily?nature`} alt=''></img>
                </div>
            </div>
        )
    }
}

