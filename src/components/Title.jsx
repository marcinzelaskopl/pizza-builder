import React, { Component } from 'react';
import '../App.scss';

class Title extends Component {
    render(){
        return (
            <div className={'title'}>
                <h1>Pizza builder</h1>
                <h2>Make your own pizza and check price!</h2>
            </div>
        )
    }
}

export default Title