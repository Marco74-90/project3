import React, {Component} from 'react'
import ShowCard from '../components/ShowCard'
import SearchShow from'../components/SearchShow'

export default class DisplayShow extends Component {

    render() {

        return (
            <div>
                <SearchShow searchText={this.props.search} handleSearch={this.props.handleSearch}/>
                <div>
                    {this.props.show.map((show) => <ShowCard show={show} key={show.id}/>)}
                </div>
            </div>
        )
    }
}