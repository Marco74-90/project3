import React, {Component} from 'react'
import {Card, Button} from 'react-bootstrap'

export default class CharacterCard extends Component{
    

    likeQuote = (e) => {

        const likes = this.props.character.quotes[0].likes

        fetch(`http://localhost:9292/characters/${this.props.character.id}`, {
            method:"PATCH",
            headers:{"Content-Type": "application/json"},
            body: JSON.stringify({likes: likes + 1})
        })
            .then(res => res.json())
    }

    render() {

        const {id, name, image, age, quotes} = this.props.character
        const quote = quotes[0].quote
        const likes = quotes[0].likes
        
        




        return(
            <div>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={image} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>{age}</Card.Text>
                        <Card.Text>{quote}</Card.Text>
                        <Button onClick={(e) => this.likeQuote} variant="primary">Likes: {likes}</Button>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}