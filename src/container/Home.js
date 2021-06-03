import React, {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import NavBar from '../components/NavBar'
import AddCharacter from '../components/AddCharacter'
import DisplayCharacter from './DisplayCharacter'
import DisplayShow from './DisplayShow'
const URL = "http://localhost:9292/characters"
const URL2 = "http://localhost:9292/shows"
const URL3 = "http://localhost:9292/quotes"
export default class Home extends Component {

    state = {
        characters:[],
        shows:[],
        quotes:[]
    }

    componentDidMount() {
        fetch(URL)
        .then(res => res.json())
        .then(data => this.setState({characters:data}))
        fetch(URL2)
        .then(res => res.json())
        .then(data => this.setState({shows:data}))
    }




    render() {

        return(
            <div>
                <NavBar />
                    <Switch>
                        <Route exact path='/Home' component={Home} />
                        <Route exact path="/Characters"  render={() => <DisplayCharacter character={this.state.characters} show={this.state.shows}/>} />
                        <Route exact path="/Shows" render={() => <DisplayShow show={this.state.shows} character={this.state.characters}/>} />
                        <Route exact path="/AddCharacter" component={AddCharacter} />
                    </Switch>              
            </div>
              
        )
    }
}


