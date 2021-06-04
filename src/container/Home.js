import React, {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import NavBar from '../components/NavBar'
import AddCharacter from '../components/AddCharacter'
import DisplayCharacter from './DisplayCharacter'
import DisplayShow from './DisplayShow'
const URL = "http://localhost:9292/characters"
const URL2 = "http://localhost:9292/shows"

export default class Home extends Component {

    state = {
        characters:[],
        shows:[],
        search:""
    }

    componentDidMount() {
        fetch(URL)
        .then(res => res.json())
        .then(data => this.setState({characters:data}))
        fetch(URL2)
        .then(res => res.json())
        .then(data => this.setState({shows:data}))
    }

    handleSearch = (input) => {
        this.setState({search: input})
    }

    updateLikes = (e) => {

    

    }

    

    


    render() {


        const filteredCharacter = this.state.characters.filter(character => character.name.toLowerCase().includes(this.state.search.toLowerCase()))
        const filteredShow = this.state.shows.filter(show => show.name.toLowerCase().includes(this.state.search.toLowerCase()))


        return(
            <div>
                <div className="header">
                    <header>Welcome</header>
                </div>
                <div className="nav">
                <NavBar />
                </div>
                <Switch>
                    <Route exact path='/Home' component={Home} />
                    <Route exact path="/Characters"  render={() => <DisplayCharacter character={filteredCharacter}
                                                                                    show={this.state.shows} 
                                                                                    handleSearch={this.handleSearch}
                                                                                    search={this.state.search}/>} />
                    <Route exact path="/Shows" render={() => <DisplayShow show={filteredShow} 
                                                                        character={this.state.characters}
                                                                        handleSearch={this.handleSearch}
                                                                        search={this.state.search}/>} />
                    <Route exact path="/AddCharacter" component={AddCharacter} />
                </Switch>              
            </div>
              
        )
    }
}


