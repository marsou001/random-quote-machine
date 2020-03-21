import React from 'react';

function Quotes(props) {    
    return (
        <div className="quote">
            <p>
                <i className="fas fa-quote-left"></i> <span>{props.text}</span>
            </p>
            <span id="cite">- <span id="author">{props.author}</span></span>
        </div>
    )
}

export default Quotes;
