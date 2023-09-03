import logo from './logo.svg';
import './App.css';
import Header_RC from './Components/header_C/Header';

function App() {
  return (
    <div className="App">
      <Header_RC/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {/* Edit <code>src/App.js</code> and save to reload. */}
          A ver como va la cosa
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
