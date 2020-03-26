import React, {Component} from 'react';

//const Hello = ({name}) => <h1>HELLOOO!!! {name}</h1>;

class Hello extends Component {
  render() {
    return (
      <h1>HELLOOO {this.props.name}!!!</h1>
    )
  }
}

export default Hello;