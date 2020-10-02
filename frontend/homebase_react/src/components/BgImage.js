import React, { Component } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class BgImage extends Component {
    state = {
        bgOfTheDay: []
    }
    
    fetchNewBg = () => {
        axios.get('https://api.nasa.gov/planetary/apod?api_key=TYM8leScz8lcuSynuFXr9gkPNEVgxWLnbI0ObHm9').then(response => {
            console.log(response.data.hdurl)
            this.setState({
                bgOfTheDay: response.data.hdurl
            });
        });
    }

    componentDidMount(){
        this.fetchNewBg();
    }

    render() {
        return (
            <div>
                <div className="BgImage">
                    <img src={this.state.bgOfTheDay} alt=''></img>
                </div>
            </div>
        )
    }
}

