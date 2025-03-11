import React from 'react';
import CandidateList from '../components/CandidateList';

const PotentialCandidatesPage: React.FC = () => {
  const savedCandidates = JSON.parse(localStorage.getItem('savedCandidates') || '[]');

  return (
    <div>
      <h1>Potential Candidates</h1>
      <CandidateList candidates={savedCandidates} />
    </div>
  );
};

export default PotentialCandidatesPage;