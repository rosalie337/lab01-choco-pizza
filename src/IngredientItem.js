import React, { Component } from 'react'
import IngredientsList from './IngredientsList'

export default class IngredientItem extends Component {
    render() {
        return (
            <div>
                <li>
                    <input type="checkbox" />
                    {this.props.amount}
                    {this.props.name}
                </li>
            </div>
        )
    }
}
