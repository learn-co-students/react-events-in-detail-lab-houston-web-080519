// Code CoordinatesButton Component Here
import React, { Component } from 'react';

export default class CoordinatesButton extends React.Component {



    render() {

        
        return (
            <button onClick={(event) => {
                const mouseCoordinates = [event.clientX, event.clientY]
                this.props.onReceiveCoordinates(mouseCoordinates)
            }}></button>
        );
    }
}