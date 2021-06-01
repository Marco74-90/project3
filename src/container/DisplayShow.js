import React, {Component} from 'react'
import Show from './components/Show'

export default class DisplayShow extends Component {

    render() {

        return (

            <div>
                {this.props.shows.map((show) => <Show show={show}/>)}
            </div>
        )
    }
}