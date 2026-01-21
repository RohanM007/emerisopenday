import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Education from './pages/Education';
import Law from './pages/Law';
import Commerce from './pages/Commerce';
import Humanities from './pages/Humanities';

function App() {
  return (
    <Router basename="/emerisopenday">
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/education" element={<Education />} />
          <Route path="/law" element={<Law />} />
          <Route path="/commerce" element={<Commerce />} />
          <Route path="/humanities" element={<Humanities />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
