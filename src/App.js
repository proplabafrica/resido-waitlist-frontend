import './App.css';
import Home from './pages/Home'
import Setup from './pages/Setup'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path= "/" element= {<Home/>} />
          <Route exact path= "/join" element= {<Setup/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App; 
