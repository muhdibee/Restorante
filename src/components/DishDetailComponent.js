import React from 'react';
import {Card, CardBody, CardImg, CardImgOverlay, CardTitle, CardText} from 'reactstrap'

export default function DishDetailComponent({selectedDish}) {
    const dish = selectedDish;
    if(dish !== null){
        return (
            <div className="row">
                <div className="col-12 col-md-4 m-1">
                <Card>
                    <CardImg src={dish.image} alt={dish.name}/>
                </Card >

                </div>
                <div className="col-12 col-md-4 m-1">
                    {dish.comments.map((comment) => {
                        return (
                            <div className="dishComment">
                                <p>{comment.comment}</p>
                                <p>--{comment.author}, {comment.date}</p>
                            </div>
                         )
                    })
                    }
                </div>
            </div>
        )
    }
    else{
       return <div></div>
    }
}
