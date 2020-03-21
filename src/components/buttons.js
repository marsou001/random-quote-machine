import React from 'react';

export default function Buttons(props) {
    const { text, author, newQuote } = props;
    const twitterLink = `https://twitter.com/intent/tweet?hashtags=quotes&text="${encodeURIComponent(text)}" ${encodeURIComponent(author)}`
    const tumblrLink = `https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes&caption=${encodeURIComponent(author)}&content=${encodeURIComponent(text)}&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button`

    return (
        <div className="footer">
            <div className="social">
                <a href={twitterLink} title="share to Twitter" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>              
                <a href={tumblrLink} title="share to Tumblr" target="_blank" rel="noopener noreferrer"><i className="fab fa-tumblr"></i></a>
            </div>
            <div className="new-quote">
                <button type="button" title="New quote" onClick={newQuote}>New quote</button>
            </div>
        </div>
    )
}

