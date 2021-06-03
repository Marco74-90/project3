import React, {Component} from 'react'
import ShowCard from '../components/ShowCard'

export default class DisplayShow extends Component {

    render() {

        return (

            <div>
                {this.props.show.map((show) => <ShowCard show={show} key={show.id}/>)}
            </div>
        )
    }
}