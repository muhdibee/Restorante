import React, { Component } from 'react'
import HeaderComponent from './HeaderComponent';
import FooterComponent from './footerComponent'
import MenuComponent from './MenuComponent';
import DishDetailComponent from './DishDetailComponent';
import { DISHES } from '../shared/dishes';

export class MainComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            selectedDish: null
        }
    }

    onDishSelect(dish) {
        this.setState({
            selectedDish: dish
        })
    }

    shouldComponentUpdate() {
        return true
    }

    render() {
        return (
            <div>
                <HeaderComponent />
                    <MenuComponent dishes= {this.state.dishes} onClick={(dish) => this.onDishSelect(dish)}/>
                    <DishDetailComponent selectedDish={this.state.selectedDish}/>
                <FooterComponent />
            </div>
        )
    }
}

export default MainComponent;
