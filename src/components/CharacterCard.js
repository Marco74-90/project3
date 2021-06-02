import React, {Component} from 'react'
import {Card} from 'react-bootstrap'

export default class CharacterCard extends Component{

    render() {

        const {id, name, image, age, quote, show} = this.props.character
        const {id, show,} = this.props.show //db should be specific with names 


        return(
            <div>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={image} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>{show}</Card.Text>
                        <Card.Text>{age}</Card.Text>
                        <Card.Text>{quote}</Card.Text>
                        <Button variant="primary">Like</Button>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}