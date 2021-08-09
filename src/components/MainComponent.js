import React, { Component } from 'react'
import HeaderComponent from './HeaderComponent';
import FooterComponent from './footerComponent'
import Menu from './MenuComponent';
import Contact from './contactComponent';
import Home from './Homecomponent';
import About from './AboutComponent'
import DishDetail from './DishDetailComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import {connect} from 'react-redux';

const mapStateToProps = state =>{
    return {
        dishes: state.dishes,
        promotions: state.promotions,
        leaders: state.leaders,
        comments: state.comments
    }
}

export class Main extends Component {

    constructor(props) {
        super(props);
    }


    shouldComponentUpdate() {
        return true
    }

    render() {
        
        const HomePage = ()=> {
            return(
                <Home dish={this.props.dishes.filter((dish) => dish.featured)[0]}
                    promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
                    leader={this.props.leaders.filter((dish) => dish.featured)[0]}
                />
            )
        } 


            const dishWithId = ({match})=> {
                return(
                    <DishDetail dish={this.props.dishes.filter(((dish)=> dish.id === parseInt(match.params.dishId, 10)))[0]} 
                        comments= {this.props.comments.filter((comments)=> comments.dishId === parseInt(match.params.dishId, 10))}
                    />
                )
            };

        return (
            <div>
                <HeaderComponent />
                    <Switch>
                        <Route path="/home" component= {HomePage}/>
                        <Route path="/about" component={()=> <About leaders={this.props.leaders}/>} />
                        <Route exact path ="/menu" component={()=> <Menu dishes={this.props.dishes}/>}/>
                        <Route path= '/menu/:dishId' component={dishWithId }/>                         
                        <Route path ="/contact" component = {()=> <Contact/>} />
                        <Redirect to= "/home"/>
                    </Switch>
                <FooterComponent />
            </div>
        )
    }
}

export default withRouter(connect(mapStateToProps) (Main));
