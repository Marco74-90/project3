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
        quotes:[],
        searchText:""
    }

    componentDidMount() {
        fetch(URL)
        .then(res => res.json())
        .then(data => this.setState({characters:data}))
        fetch(URL2)
        .then(res => res.json())
        .then(data => this.setState({shows:data}))
        fetch(URL3)
        .then(res => res.json())
        .then(data => this.setState({quotes: data}))
    }

    


    render() {

        const handleSearch = (input) => {
            this.setState({searchText:input})
        }

        const filteredCharacter = 
                this.state.characters.filter(character => {
                    return character.name.toLowerCase().includes(this.state.searchText.toLocaleLowerCase())
                }) 

        



        return(
            <div>
                <NavBar />
                    <Switch>
                        <Route exact path='/Home' component={Home} />
                        <Route exact path="/Characters"  render={() => <DisplayCharacter character={filteredCharacter}
                                                                                         show={this.state.shows} 
                                                                                         quote={this.state.quotes} 
                                                                                         handleSearch={handleSearch}
                                                                                         searchText={this.state.searchText}/>} />
                        <Route exact path="/Shows" render={() => <DisplayShow show={this.state.shows} 
                                                                              character={this.state.characters}/>} />
                        <Route exact path="/AddCharacter" component={AddCharacter} />
                    </Switch>              
            </div>
              
        )
    }
}


