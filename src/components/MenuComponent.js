import React, {Component} from 'react';
import {Media} from 'reactstrap';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

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

    renderDish(selectedDish) {
        if (selectedDish !== null){
            return (
                <div>
                    <Card>
                        <CardImg width="100%" src={selectedDish.image}  alt={selectedDish.name} />               
                        <CardBody>
                            <CardTitle>{selectedDish.name}</CardTitle>
                            <CardText>{selectedDish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
            )
        }
        else {
            return(
            <div></div>
            )
        }
    }

    render() {
        const menu = this.props.dishes;

        return(
            <div className="container">
                <div className="row">
                     <div className="col-12 col-md-7 mt-5 m-1">
                        {this.renderDish(this.state.selectedDish)}
                     </div>
                </div>
                <div className="row">
                        {menu.map((dish) => {
                            return(
                                <div key={dish.id} className="col-12 col-md-4 mt-4 m-1">
                                    <Card onClick ={()=> this.onDishSelect(dish)}>
                                        <CardImg width="90%" left src={dish.image} alt={dish.name}/>
                                        <CardImgOverlay>
                                            <CardTitle>{dish.name}</CardTitle>
                                        </CardImgOverlay>
                                    </Card>
                                </div>
                            )
                        })}
                </div>
            </div>
        );
    }
}


export default MenuComponent;