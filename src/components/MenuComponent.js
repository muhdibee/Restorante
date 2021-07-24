import React from 'react';
import { Card, CardBody, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

function Menu({onClick, dishes}) {
    
        const menu = dishes;

        return(
            <div className="container">
                    <div className="row">
                            {menu.map((dish) => {
                                return(
                                    <div key={dish.id} className=" col-md-3 mt-2 m-1">
                                            <a href="#dishdetail">
                                                <Card className="">
                                                    <CardImg width="90%" left src={dish.image} alt={dish.name} />
                                                    <CardBody >
                                                        <CardTitle>{dish.name}</CardTitle>
                                                        <p className="">Price: NGN {dish.price}</p>
                                                    </CardBody>
                                                </Card>    
                                            </a>                                
                                    </div>
                                )
                            })}
                    </div>
            </div>
        );
}


export default Menu;