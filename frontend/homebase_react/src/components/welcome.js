import React from 'react';
import axios from 'axios';

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

    // noAuthor = () => {
    //     if
    // }

    render() {
        return(
            <div className="welcome-message">
                {this.state.quoteData.map( quote =>
                    <ul key={quote.id}>
                        <h1>{quote.title} - </h1>
                        <h2>{quote.quote}</h2>
                        <h3> Author - {quote.author ? quote.author : 'Somebody'}</h3>
                    </ul>
                )}
            </div>
        )
    }
}

export default welcome;