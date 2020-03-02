import React from 'react';
//import { Button} from './components/Button';
import {Counter} from './components/Counter';
import './App.css';

/*
function App() {
  return (
    <div className="App">
      <Button onClick={() => console.log("clic")} label="Cliquez moi !"/>
      <Button onClick={() => console.log("button!")} label="clic"/>
    </div>
  );
}
*/

export class App extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          val : 1,
      }
  }

  render() {
      return (
          <div className="App">
              <Counter />
          </div>
      );
  }
}


export default App;
