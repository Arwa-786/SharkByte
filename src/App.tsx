import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GenreSelection from './pages/GenreSelection';
import WorldView from './pages/WorldView';
import NextPage from './pages/NextPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GenreSelection />} />
        <Route path="/world/:genre" element={<WorldView />} />
        <Route path="/next-page" element={<NextPage />} />
      </Routes>
    </Router>
  );
}

export default App;
