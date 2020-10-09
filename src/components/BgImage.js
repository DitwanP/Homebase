import React, { Component } from 'react';
import {animateScroll as scroll} from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class BgImage extends Component {
    render() {
        return (
            <div>
                <div className="BgImage">
                    <img src='https://source.unsplash.com/1920x1080/daily?wallpapers' alt=''></img>
                </div>
                <button className="go-to-todolist-button" onClick={() => scroll.scrollToBottom()}>
                    <FontAwesomeIcon icon="chevron-down" />
                </button>
                <button className="go-to-top-button" onClick={() => scroll.scrollToTop()}>
                    <FontAwesomeIcon icon="chevron-up" />
                </button>
                <div className="BgImage2">
                    <img src='https://source.unsplash.com/1920x1080/daily?nature' alt=''></img>
                </div>
            </div>
        )
    }
}

