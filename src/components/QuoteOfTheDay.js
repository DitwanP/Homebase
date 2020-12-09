import React from 'react';
import axios from 'axios';
import { Spring } from 'react-spring/renderprops';

class QuoteOfTheDay extends React.Component {
    state = {
        quote: '',
        author: '',
    }
    
    fetchTodaysQuote = () => {
        axios.get('https://quotes.rest/qod?category=inspire&language=en')
        .then(response => {
            // Success
            this.setState({
                quote: response.data.contents.quotes[0].quote,
                author: response.data.contents.quotes[0].author,
            });
        })
        .catch((error) => {
            // Error
            if (error.response) {
                this.setState({
                    quote: "Sorry there's no quote at the moment :(",
                    author: 'nobody',
                });
            }
        });
    }

    componentDidMount(){
        this.fetchTodaysQuote();
    }

    render() {
        return(
            <Spring 
                from={{ opacity: 0}} 
                to={{ opacity: 1}}
                config={{duration: 1500, delay: 500}}
            >
                {props => (
                    <div style={props} className="quote-of-the-day">                      
                        <h2>{this.state.quote}</h2>
                        <h3> - {this.state.author ? this.state.author : 'Somebody'}</h3>
                    </div>
                )}
            </Spring>
        )
    }
}

export default QuoteOfTheDay;