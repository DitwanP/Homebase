import React from 'react';
import axios from 'axios';
import { Spring } from 'react-spring/renderprops';
import { config } from '@fortawesome/fontawesome-svg-core';

class welcome extends React.Component {
    state = {
        quoteData: []
    }
    
    fetchTodaysQuote = () => {
        axios.get('http://quotes.rest/qod?category=inspire&language=en').then(response => {
            console.log(response.data.contents.quotes)
            this.setState({
                quoteData: response.data.contents.quotes
            });
        });
    }

    componentDidMount(){
        this.fetchTodaysQuote();
    }

    render() {
        return(
            <Spring 
                from={{ marginTop: -500}} 
                to={{ marginTop: 350}}
                config={{duration: 1000}}
            >
                {props => (
                    <div style={props} className="welcome-message">                      
                        {this.state.quoteData.map( quote =>
                            <ul key={quote.id}>
                                <h2>{quote.quote}</h2>
                                <h3> Author - {quote.author ? quote.author : 'Somebody'}</h3>
                            </ul>
                        )}
                    </div>
                )}
            </Spring>
        )
    }
}

export default welcome;