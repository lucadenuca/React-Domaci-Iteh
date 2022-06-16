import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PocetnaStrana from './pages/PocetnaStrana';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<PocetnaStrana />} />
        </Routes>
      </Router >
    </div>
  );
}

export default App;
