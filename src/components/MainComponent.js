import React, { Component } from 'react'
import HeaderComponent from './HeaderComponent';
import FooterComponent from './footerComponent'
import Menu from './MenuComponent';
import { DISHES } from '../shared/dishes';
import Home from './Homecomponent';
import { Switch, Route, Redirect } from 'react-router-dom';

export class Main extends Component {

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
        const HomePage = (props)=> {
            return(
                <Home/>
            )
        } 

        return (
            <div>
                <HeaderComponent />
                    <Switch>
                        <Route path="/home" component= { HomePage }/>
                        <Route exact path ="/menu" component={()=> <Menu dishes={this.state.dishes}/>}/>
                        <Redirect to= "/home"/>
                    </Switch>
                <FooterComponent />
            </div>
        )
    }
}

export default Main;
