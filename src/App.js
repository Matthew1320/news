import './App.css';
import NewsList from './components/NewsList';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <div className='App-header'>
        <NavBar />
      </div>
      <NewsList category={'sports'}/>
    </div>
  );
}

export default App;
