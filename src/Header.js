import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div className="header-icons">
                <div className="header-logo">
                    <img src="logo.png" alt="logo" />
                </div>
                <div>
                    <h1 className="title">Delicious</h1>
                    <h5 className="sub-title"> THE BEST FOOD BLOG ON THE WEB</h5>
                </div>
                <div>
                    <img src="fbIcon.png" alt="fb" />
                    <img src="twitIcon.png" alt="twit" />
                    <img src="gpIcon.png" alt="gp" />
                    <img src="instaIcon.png" alt="ig" />
                    <img src="flicIcon.png" alt="flic" />
                    <img src="pintIcon.png" alt="pint" />
                </div>

                <div className="share-icons">
                    <img src="rssIcon.png" alt="rss" />
                    <img src="mailIcon.png" alt="mail" />
                </div> 
            </div>
        )
    }
}
