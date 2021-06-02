import React, {Component} from  "react" 
import {Form} from 'react-bootstrap'
const URL = ""
export default class Form extends Component {

    state = {
        name: "",
        age : 0,
        image: ""
    }


    handleSubmit= () => {

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
                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Name" onChange={this.setState({name:this.input.value})}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Age</Form.Label>
                        <Form.Control type="number" placeholder="Enter Age" onChange={this.setState({age:this.input.value})}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Image</Form.Label>
                        <Form.Control type="url" placeholder="Image Url" onChange={this.setState({image:this.input.value})} />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        )
    }
}