import React from 'react';
import {Card, CardBody, CardImg, CardImgOverlay, CardTitle, CardText} from 'reactstrap'

export default function DishDetailComponent({selectedDish}) {
    const dish = selectedDish;
    if(dish !== null){
        return (
                <div className="container">
                    <div className="row mt-4">
                        <div className="col-12 col-md-4 m-1">
                        <Card className="">
                            <CardImg src={dish.image} alt={dish.name}/>
                            <div className="text-center">{dish.name}</div>
                            <div className="text-center">Price: NGN{dish.price}</div>
                        </Card >

                        </div>
                        <div className="col-12 col-md-4 m-1"> 
                            {dish.comments.map((comment) => {
                                return (
                                    <div className="dishComment m-1 p-1">
                                        <p>{comment.comment}</p>
                                        <p>--{comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                                    </div>
                                )
                            })
                            }
                        </div>
                    </div>
                </div>
        )
    }
    else{
       return <div></div>
    }
}
