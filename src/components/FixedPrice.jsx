import React, { Component } from 'react';
import '../App.scss';

class FixedPrice extends Component {
    render(){
        return (
            <div>
                {this.props.totalPrice}
            </div>
        )
    }
}

export default FixedPrice