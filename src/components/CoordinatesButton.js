import React, {Component} from 'react';

export default class CoordinatesButton extends Component {

    getCoords = e => {
        this.props.onReceiveCoordinates([e.clientX, e.clientY])
    }
    
    render() {
        return (
            <div>
                <button onClick={this.getCoords}>Mouse Coords</button>
            </div>
        )
    }
}
