import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div>             
                <div>
                    <div class="line-break">
                    </div>
                    <img className="small-logo" src="smallLogo.png" alt="pizza"/>
                    <div class="line-break">
                    </div>
                </div>                
                <div class="copy gutter-right">Delicious &copy;2013 All Rights Reserved.
                </div>                
                <div class="copy gutter-right">Proudly published with Ghost
                </div>
            </div>
        )
    }
}