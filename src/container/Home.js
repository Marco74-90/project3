import React, {Component} from 'react'
import DisplayCharacter from './DisplayCharacter'
import DisplayShow from './DisplayShow'
const URL1 = "a"
const URL2 = "b"
export default class Home extends Component {

    state = {
        characters:[],
        shows:[],
        details:{}
    }

    componentDidMount() {
        fetch(URL1)
        .then(res => res.json())
        .then(data => this.setState({characters:data}))
        fetch (URL2)
        .then(res => res.json())
        .then(data => this.setState({shows:data}))
    }


    render() {

        return(
            <div>
                <div>
                    <NavBar />
                </div>
                <div>
                    <DisplayCharacter character={this.state.characters}/>
                    <DisplayShow show={this.state.shows}/>
                </div>
            
            </div>
        )
    }
}