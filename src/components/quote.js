import React from 'react';
import '../../node_modules/font-awesome/css/font-awesome.min.css';

function Quotes(props) {    
    return (
        <div className="quote">
            <p>
                <i className="fas fa-quote-left"></i>
                <span>{props.text}</span>
            </p>
            <span id="cite">- <span id="author">{props.author}</span></span>
        </div>
    )
}

export default Quotes;
