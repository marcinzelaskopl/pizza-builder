import React, { Component } from 'react';
import '../App.scss';

class Size extends Component {
    render(){
        return (
            <div className={'size'}>
                <button onClick={this.props.onClick} className={'btn'} value={10}>Small</button>
                <button onClick={this.props.onClick} className={'btn'} value={15}>Medium</button>
                <button onClick={this.props.onClick} className={'btn'} value={20}>Large</button>
            </div>
        )
    }
}

export default Size