import React from 'react';
import axios from 'axios';
import { Spring } from 'react-spring/renderprops';

class QuoteOfTheDay extends React.Component {
    state = {
        quoteData: []
    }
    
    fetchTodaysQuote = () => {
        axios.get('https://quotes.rest/qod?category=inspire&language=en').then(response => {
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
                from={{ opacity: 0}} 
                to={{ opacity: 1}}
                config={{duration: 1500, delay: 500}}
            >
                {props => (
                    <div style={props} className="quote-of-the-day">                      
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

export default QuoteOfTheDay;