// 📌 Stateful Component
// ❗ When only using props, use a stateless component

import React, {Component} from 'react';

class StatefulComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
    };
  }

  render() {
    return(
      <button onClick={() => this.setState({clicked: true})}>
      </button>
    );
  }
}
