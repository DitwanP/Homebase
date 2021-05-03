import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Spring } from 'react-spring/renderprops';

const QuoteOfTheDay = () => {

    const [quote, setQuote] = useState("");
    const [author, setAuthor] = useState("");
    
    function fetchTodaysQuote(){
        axios.get('https://quotes.rest/qod?category=inspire&language=en')
        .then(response => {
            // Success
            setQuote(response.data.contents.quotes[0].quote);
            setAuthor(response.data.contents.quotes[0].author);
        })
        .catch((error) => {
            // Error
            if (error.response) {
                setQuote("Sorry there's no quote at the moment :(");
                setAuthor("nobody");
            }
        });
    }

    useEffect(() => {
        fetchTodaysQuote();
    }, [])

        return(
            <Spring 
                from={{ opacity: 0}} 
                to={{ opacity: 1}}
                config={{duration: 1500, delay: 500}}
            >
                {props => (
                    <div style={props} className="quote-of-the-day">                      
                        <h2>{quote}</h2>
                        <h3> - {author ? author : 'Somebody'}</h3>
                    </div>
                )}
            </Spring>
        )
}

export default QuoteOfTheDay;