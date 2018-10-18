import React, { Component } from 'react';
import './App.scss';
import Title from "./components/Title";
import Size from "./components/Size";
import FixedPrice from "./components/FixedPrice";

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
        totalPrice: 0,
        sizePrice: '',
    }
  }
  onClick = (e) => {
    this.setState ({
        totalPrice: e.target.value,
    })
  };
  render() {
    return (
      <div className="main grid-container">
        <div className={'row'}>
          <div className={'col-2'}>
          </div>
          <div className={'col-10'}>
            <Title/>
            <Size onClick={this.onClick}/>
            <FixedPrice totalPrice={this.state.totalPrice}/>
          </div>
          <div className={'col-2'}>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
