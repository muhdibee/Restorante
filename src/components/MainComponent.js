import React, { Component } from 'react'
import HeaderComponent from './HeaderComponent';
import FooterComponent from './footerComponent'
import Menu from './MenuComponent';
import Contact from './contactComponent';
import Home from './Homecomponent';
import DishDetail from './DishDetailComponent';
import { DISHES } from '../shared/dishes';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';
import { COMMENTS } from '../shared/comments';
import { Switch, Route, Redirect } from 'react-router-dom';

export class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            promotions: PROMOTIONS,
            leaders: LEADERS,
            comments: COMMENTS,
            selectedDish: null
        }
    }


    shouldComponentUpdate() {
        return true
    }

    render() {
        
        const HomePage = (props)=> {
            return(
                <Home dish={this.state.dishes.filter((dish) => dish.featured)[0]}
                    promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
                    leader={this.state.leaders.filter((dish) => dish.featured)[0]}
                />
            )
        } 


            const dishWithId = ({match})=> {
                return(
                    <DishDetail dish={this.state.dishes.filter(((dish)=> dish.id === parseInt(match.params.dishId, 10)))[0]} 
                        comments= {this.state.comments.filter((comments)=> comments.dishId === parseInt(match.params.dishId, 10))}
                    />
                )
            };

        return (
            <div>
                <HeaderComponent />
                    <Switch>
                        <Route path="/home" component= {HomePage}/>
                        {/* <Route path="/about" component={()=> <About leaders={this.state.leaders}/>} /> */}
                        <Route exact path ="/menu" component={()=> <Menu dishes={this.state.dishes}/>}/>
                        <Route path= '/menu/:dishId' component={dishWithId }/>                         
                        <Route path ="/contact" component = {()=> <Contact/>} />
                        <Redirect to= "/home"/>
                    </Switch>
                <FooterComponent />
            </div>
        )
    }
}

export default Main;
