import React, {Component} from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class MenuComponent extends Component{
    constructor(props) {
        super(props);            
    }
    
    render() {
        const menu = this.props.dishes;

        return(
            <div className="container">
                <div className="row">
                        {menu.map((dish) => {
                            return(
                                <div key={dish.id} className="col-12 col-md-4 mt-2 m-1">
                                    <Card className="pointer" onClick ={()=> this.props.onClick(dish)}>
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