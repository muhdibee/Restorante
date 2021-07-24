import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

function Menu({onClick, dishes}) {
    
        const menu = dishes;

        return(
            <div className="container">
                <a href="#dishdetail">
                    <div className="row">
                            {menu.map((dish) => {
                                return(
                                    <div key={dish.id} className="col-12 col-md-4 mt-2 m-1">
                                            <Card className="pointer" >
                                                <CardImg width="90%" left src={dish.image} alt={dish.name}/>
                                                <CardImgOverlay>
                                                    <CardTitle>{dish.name}</CardTitle>
                                                </CardImgOverlay>
                                            </Card>                                    
                                    </div>
                                )
                            })}
                    </div>
                </a>
            </div>
        );
}


export default Menu;