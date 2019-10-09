// Code DelayedButton Component Here
import React, { Component } from 'react' 

export default class DelayedButton extends React.Component {

    render() {
        return (
            <button onClick={(event) => {
                event.persist()
                console.log(typeof this.props.onDelayedClick)
                setTimeout(this.props.onDelayedClick, this.props.delay, event)
            }}>

            </button>
        );
    }

}
