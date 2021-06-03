import React, {Component} from  "react" 
import {Form, Button} from 'react-bootstrap'
const URL = "http://localhost:9292/Characters"
export default class AddCharacter extends Component {

    state = {
        name: "",
        age : 0,
        quote: "",
        image: "",
        likes: 0
    }


    submit = (e) => {
        e.preventDefault()
        const newObj = {
            headers:{"Content-Type": "application/json"},
            method: "POST",
            body: JSON.stringify(this.state)
        }
        
        fetch(URL,newObj)
        .then(res => res.json())
        .then()
    }




    render() {

        return (
            
            <div>
                <Form>
                    <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Name" onChange={(e) => this.setState({name: e.target.value})}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Age</Form.Label>
                        <Form.Control type="number" placeholder="Enter Age" onChange={(e) => this.setState({age: e.target.value})}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>quote</Form.Label>
                        <Form.Control type="text" placeholder="Enter Quote" onChange={(e) => this.setState({name: e.target.value})}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Image</Form.Label>
                        <Form.Control type="url" placeholder="Image Url" onChange={(e) => this.setState({image: e.target.value})} />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        )
    }
}