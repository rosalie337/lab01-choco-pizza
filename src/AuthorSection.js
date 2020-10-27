import React, { Component } from 'react'

export default class AuthorSection extends Component {
    render() {
        return (
            <div>
                <div>
                    <img src="vanPic.png" />
                    <h3>Vanessa Stevenson</h3>
                    <p>Food enthusiast, photography fan. Add a pinch of raw foodism and that is pretty much who I am. </p>
                </div>
                <div>
                    <button>Share Recipe</button>
                </div>
            </div>
        )
    }
}