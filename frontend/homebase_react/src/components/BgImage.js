import React, { Component } from 'react';
import axios from 'axios';
import FileSaver from 'file-saver'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class BgImage extends Component {
    state = {
        bgOfTheDay: []
    }
    
    fetchNewBg = () => {
        var imageBlob = FileSaver.saveAs("https://source.unsplash.com/random/1920x1080", "bgImage.jpg");

        axios.put('http://127.0.0.1:8000/api/background/1/update/', 
        {name: 'Current background', image: imageBlob})

        axios.get('http://127.0.0.1:8000/api/background/1/').then(response => {
            this.setState({
                bgOfTheDay: response.data.image
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
                <div className="button-container">
                    <button type='submit' title="New Background" className='wallpaper-button' onClick={() => this.fetchNewBg()}> 
                        <p> 
                            <FontAwesomeIcon icon="redo-alt" />    
                        </p> 
                    </button>
                </div>
            </div>
        )
    }
}

