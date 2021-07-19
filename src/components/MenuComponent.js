import React, {Component} from 'react';
import {Media} from 'reactstrap';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import DishDetailComponent from './DishDetailComponent';

class MenuComponent extends Component{
    constructor(props) {
        super(props);
        this.state = {
            selectedDish: null
        }
            
    }
    
    onDishSelect(dish) {
        this.setState({
            selectedDish: dish
        })
    }


    render() {
        const menu = this.props.dishes;

        return(
            <div className="container">
                <div className="row">
                        {menu.map((dish) => {
                            return(
                                <div key={dish.id} className="col-12 col-md-4 mt-4 m-1">
                                    <Card styles={{cursor:'pointer'}} onClick ={()=> this.onDishSelect(dish)}>
                                        <CardImg width="90%" left src={dish.image} alt={dish.name}/>
                                        <CardImgOverlay>
                                            <CardTitle>{dish.name}</CardTitle>
                                        </CardImgOverlay>
                                    </Card>
                                </div>
                            )
                        })}
                </div>
                <DishDetailComponent selectedDish={this.state.selectedDish}/>
            </div>
        );
    }
}


export default MenuComponent;