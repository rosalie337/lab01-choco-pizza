import React, { Component } from 'react'
import IngredientItem from './IngredientItem'

export default class IngredientsList extends Component {
    render() {
        return (
            <div>
                <ul>
                    <IngredientItem amount="1 1/2 cup " name="milk" />
                    <IngredientItem amount="1/2 cup " name="mascarpone" />
                    <IngredientItem amount="1/2 tsp " name="pink salt" />
                    <IngredientItem amount="1lb " name="Black Mission Figs" />
                    <IngredientItem amount="1/2 cup " name="brown sugar" />
                    <IngredientItem amount="2-3 tsp " name="water" />
                </ul>
                <ul>
                    <IngredientItem amount="1 1/2 cups" name="heavy cream"/>
                    <IngredientItem amount="1/3 " name="granulated sugar"/>
                    <IngredientItem amount="2 " name="egg yolks"/>
                    <IngredientItem amount="1 " name="lemons, juiced"/>
                    <IngredientItem amount="2 tbsp " name="button"/>
                    <IngredientItem amount="1 cup " name="honey roasted pecans, roughly chopped"/>
                </ul>
            </div>
        )
    }
}
