import './App.css';
import Counter from './Components/Counter/Counter';
import { useState } from 'react';

function App() {
  const[count, setCount] = useState(0);
  
  // console.log(count, setCount)


  return (
    <div className="App">
      <header className="App-header">
        <Counter count={count} text= ' "ah ah ah"' setCount={setCount} />
      </header>
    </div>
  );
}

export default App;
