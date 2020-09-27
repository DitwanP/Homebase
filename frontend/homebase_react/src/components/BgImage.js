import React, { Component } from 'react';
// import axios from 'axios';

export default class BgImage extends Component {
    // state = {
    //     bgOfTheDay: []
    // }
    
    // fetchTodaysBg = () => {
    //     axios.get('https://source.unsplash.com/random/1920x1080').then(response => {
    //         console.log(response)
    //         this.setState({
    //             bgOfTheDay: response.data
    //         });
    //     });
    // }

    // componentDidMount(){
    //     this.fetchTodaysBg();
    // }

    render() {
        return (
            <div className="BgImage">
                <img src='https://source.unsplash.com/random/1920x1080' alt=''></img>
            </div>
        )
    }
}

