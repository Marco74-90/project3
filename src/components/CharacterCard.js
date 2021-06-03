import React, {Component} from 'react'
import {Card, Button} from 'react-bootstrap'
const URL = "localhost:9292/"
export default class CharacterCard extends Component{

    

    render() {

        const {id, name, image, age, quote,likes} = this.props.character
        const {characters,} = this.props.show //db should be specific with names 

        return(
            <div>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={image} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>{age}</Card.Text>
                        <Card.Text>{quote}</Card.Text>
                        <Button variant="primary">Like `${likes}`</Button>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}