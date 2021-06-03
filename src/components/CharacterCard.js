import React, {Component} from 'react'
import {Card, Button} from 'react-bootstrap'

export default class CharacterCard extends Component{

    

    render() {

        const {name, image, age,likes} = this.props.character


        return(
            <div>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={image} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>{age}</Card.Text>
                        <Card.Text>quote</Card.Text>
                        <Button variant="primary">Like `${likes}`</Button>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}