import React, { Component } from 'react'
import MenuComponent from './MenuComponent';
import DishDetailComponent from './DishDetailComponent';
import {Navbar, NavbarBrand} from 'reactstrap';
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

    render() {
        return (
            <div>
                <Navbar dark color="primary">
                    <div className="container">
                        <NavbarBrand>Restorante</NavbarBrand>
                    </div>
                </Navbar>

                <MenuComponent dishes= {this.state.dishes} onClick={(dish) => this.onDishSelect(dish)}/>
                <DishDetailComponent selectedDish={this.state.selectedDish}/>
            </div>
        )
    }
}

export default MainComponent;
