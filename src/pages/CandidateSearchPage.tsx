import React, { useState, useEffect } from 'react';
import Candidate from '../components/Candidate';

const CandidateSearchPage: React.FC = () => {
  const [candidates, setCandidates] = useState([]);
  const [currentCandidateIndex, setCurrentCandidateIndex] = useState(0);
  const [savedCandidates, setSavedCandidates] = useState(() => {
    const saved = localStorage.getItem('savedCandidates');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    // Fetch candidates from an API or a static list
    const fetchCandidates = async () => {
      const response = await fetch('/candidates.json');
      const data = await response.json();
      setCandidates(data);
    };

    fetchCandidates();
  }, []);

  const handleSaveCandidate = () => {
    const candidate = candidates[currentCandidateIndex];
    const newSavedCandidates = [...savedCandidates, candidate];
    setSavedCandidates(newSavedCandidates);
    localStorage.setItem('savedCandidates', JSON.stringify(newSavedCandidates));
    handleNextCandidate();
  };

  const handleNextCandidate = () => {
    if (currentCandidateIndex < candidates.length - 1) {
      setCurrentCandidateIndex(currentCandidateIndex + 1);
    } else {
      setCurrentCandidateIndex(0);
    }
  };

  if (candidates.length === 0) {
    return <p>No more candidates available.</p>;
  }

  return (
    <div>
      <Candidate candidate={candidates[currentCandidateIndex]} />
      <button onClick={handleSaveCandidate}>+</button>
      <button onClick={handleNextCandidate}>-</button>
    </div>
  );
};

export default CandidateSearchPage;