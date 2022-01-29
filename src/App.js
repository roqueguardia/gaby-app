import logo from './logo.svg';
import './App.css';

import NavBar from './components/NavBar'
import CartWidget from './components/CartWidget'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CartWidget />
        <NavBar />

      </header>
    </div>
  );
}

export default App;
