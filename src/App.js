import './App.css';
// import NewsList from './components/NewsList';
// import NavBar from './components/NavBar/NavBar';

// function App() {
//   return (
//     <div className="App">
//       <div className='App-header'>
//         <NavBar />
//       </div>
//       <NewsList category={'sports'}/>
//     </div>
//   );
// }

// export default App;

import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import {HomePage} from './pages/HomePage'
import {Business} from './pages/Business'
import {Entertainment} from './pages/Entertainment'
import {General} from './pages/General'
import {Health} from './pages/Health'
import {Science} from './pages/Science'
import {Sports} from './pages/Sports'
import {Technology} from './pages/Technology'
import { Layout } from './components/Layout';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<HomePage />}/>
          <Route path='/Business' element={<Business />}/>
          <Route path='/Entertainment' element={<Entertainment />}/>
          <Route path='/General' element={<General />}/>
          <Route path='/Health' element={<Health />}/>
          <Route path='/Science' element={<Science />}/>
          <Route path='/Sports' element={<Sports />}/>
          <Route path='/Technology' element={<Technology />}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default App
