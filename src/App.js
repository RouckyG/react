import React from 'react';
import { Button} from './components/Button';
import './App.css';

function App() {
  return (
    <div className="App">
      <Button onClick={() => console.log("clic")} label="Cliquez moi !"/>
      <Button onClick={() => console.log("button!")} label="clic"/>
    </div>
  );
}

export default App;
