import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchQuotes } from '../actions/quotesAction';

function Quotes(props) {    
    useEffect(() => {
        props.fetchQuotes();
    }, [])

    return (
        <div className="quote">
            <p>
                <i className="fas fa-quote-left"></i> <span>{props.text}</span>
            </p>
            <span id="cite">- <span id="author">{props.author}</span></span>
        </div>
    )
}

Quotes.propTypes = {
    fetchQuotes: PropTypes.func.isRequired,    
    text: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired
}
const mapStateToProps = state => ({
    text: state.quote.quotes[state.quote.quote].text,
    author: state.quote.quotes[state.quote.quote].author
})    

export default connect(mapStateToProps, { fetchQuotes })(Quotes);
