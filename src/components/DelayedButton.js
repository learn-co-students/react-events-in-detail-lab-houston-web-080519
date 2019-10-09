// Code DelayedButton Component Here
import React, { Component } from 'react' 

export default class DelayedButton extends React.Component {

    render() {
        return (
            /*this.props.onDelayedClick 
            this.props.delay*/
            <button onClick={(event) => {
                event.persist()
                /* onDelayedClick={ event => console.log(event) } */ 
                // const o = {
                //     f: this.props.onDelayedClick(event)
                // }
                console.log(typeof this.props.onDelayedClick)
                setTimeout(this.props.onDelayedClick, this.props.delay, event)
            }}>

            </button>



        );
    }

}
