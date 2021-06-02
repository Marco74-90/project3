import React, {Component} from 'react'
import ShowCard from './components/ShowCard'

export default class DisplayShow extends Component {

    render() {

        return (

            <div>
                {this.props.shows.map((show) => <ShowCard show={show}/>)}
            </div>
        )
    }
}