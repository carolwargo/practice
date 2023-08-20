import './App.css';
import HomePage from './views/HomePage/index.js';
import Display from './components/Display.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <HomePage/>
       <Display/>
      </header>
    </div>
  );
}

export default App;
