import React from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle} from 'reactstrap';

export default function Home({ dish, promotion, leader }) {

    function RenderCard({item}) {
        return(
            <div className=" col-md-3 my-3">
                 <Card >
                <CardImg src={item.image} alt={item.name} />
                <CardBody>
                    <CardTitle><strong>{item.name}</strong></CardTitle>
                    {item.designation? <CardSubtitle><strong>{item.designation}</strong></CardSubtitle> : null }
                    <CardText>{item.description}</CardText>
                </CardBody>
            </Card>
            </div>
           
        )
    }

    return (
        <div className="container">
            <div className="row align-items-start">
                <RenderCard item={dish} />
                <RenderCard item={promotion} />
                <RenderCard item={leader} />
            </div>            
        </div>
    )
}
