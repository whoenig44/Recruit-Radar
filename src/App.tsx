import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CandidateSearchPage from './pages/CandidateSearchPage';
import PotentialCandidatesPage from './pages/PotentialCandidatesPage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CandidateSearchPage />} />
        <Route path="/potential-candidates" element={<PotentialCandidatesPage />} />
      </Routes>
    </Router>
  );
};

export default App;
