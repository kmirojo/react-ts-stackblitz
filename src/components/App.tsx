import React, {Component} from 'react';
import Hello from './Hello';

interface AppProps { }
interface AppState {
  name: string;
}
class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Juan'
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <p>
          Start editing to see some magic happen :)
        </p>
      </div>
    );
  }
}

export default App;