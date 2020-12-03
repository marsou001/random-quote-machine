import React from 'react';
import PropTypes from 'prop-types';
import { getQuote } from '../actions/quotesAction';
import { connect } from 'react-redux';

function Buttons(props) {    
    const twitterLink = `https://twitter.com/intent/tweet?hashtags=quotes&text="${encodeURIComponent(props.text)}" ${encodeURIComponent(props.author)}`
    const tumblrLink = `https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes&caption=${encodeURIComponent(props.author)}&content=${encodeURIComponent(props.text)}&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button`

    return (
        <div className="footer">
            <div className="social">
                <a href={twitterLink} title="share to Twitter" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>              
                <a href={tumblrLink} title="share to Tumblr" target="_blank" rel="noopener noreferrer"><i className="fab fa-tumblr"></i></a>
            </div>
            <div className="new-quote">
                <button type="button" title="New quote" onClick={props.getQuote}>New quote</button>
            </div>
        </div>
    )
}

Buttons.propTypes = { 
    text: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    getQuote: PropTypes.func.isRequired
}

const mapStateToProps = state => ({    
    text: state.quote.quotes[state.quote.quote].text,
    author: state.quote.quotes[state.quote.quote].author
});

export default connect(mapStateToProps, { getQuote })(Buttons);
