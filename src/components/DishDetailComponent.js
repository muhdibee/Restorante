import React from 'react';
import { Link, useParams } from 'react-router-dom';
import {Card, CardImg, Breadcrumb, BreadcrumbItem} from 'reactstrap'

export default function DishDetail({dish, comments}) {
    const RenderComment = ({comments}) => {
        if(comments !== null){
            return(
                comments.map((comment) => {
                    return (
                        <div key={comment.id} className="dishComment m-1 p-1">
                            <p>{comment.comment}</p>
                            <p>--{comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                        </div>
                    )
                })
            )
        }
        else <div>{''}</div>
    }
    if(dish !== null){
        return (
                <div className="container">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="row mt-4">
                        <div className="col-8 col-md-4 m-1">
                        <a id="dishdetail">
                            <Card className="">
                                <CardImg src={dish.image} alt={dish.name}/>
                                <div className="text-center">{dish.name}</div>
                                <div className="text-center">Price: NGN{dish.price}</div>
                            </Card >
                        </a>

                        </div>
                        <div className="col-12 col-md-5 m-1"> 
                            { <RenderComment comments ={comments}/> }
                        </div>
                    </div>
                </div>
        )
    }
    else{
       return <div></div>
    }
}
