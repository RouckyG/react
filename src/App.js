import React from 'react';
//import { Button} from './components/Button';
import {Counter} from './components/Counter';
import './App.css';
import { Unfold } from './components/Unfold';
import { Chronometer } from './components/Chronometer';

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
        <div>
          <div className="App">
              <Counter />
          </div>
          <div className="App">
          <Unfold />
        </div>
        <div className="App">
          <Chronometer />
        </div>
      </div>
      );
  }
}


export default App;
