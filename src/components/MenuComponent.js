import React from 'react';
import { Card, CardBody, CardImg, CardTitle,Breadcrumb, BreadcrumbItem, CardImgOverlay } from 'reactstrap';
import {Link} from 'react-router-dom'

function Menu({dishes}) {
    
        const menu = dishes;

        return(
            <div className="container">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Menu</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Menu</h3>
                        <hr />
                    </div>                
                    <div className="row mb-5">
                            {menu.map((dish) => {
                                return(
                                    <div key={dish.id} className="col-12 col-sm-4 mt-2 m-1">
                                            <Link to={`/menu/${dish.id}`}>
                                                <Card className="">
                                                    <CardImg width="100%" left src={dish.image} alt={dish.name} />
                                                    <CardImgOverlay>{dish.name}</CardImgOverlay>
                                                </Card>    
                                            </Link>                                
                                    </div>
                                )
                            })}
                    </div>
            </div>
        );
}


export default Menu;