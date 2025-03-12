import React, { useEffect, useState } from 'react';
import { Candidate as CandidateInterface } from '../interfaces/Candidate.interface';

const SavedCandidates: React.FC = () => {
  const [savedCandidates, setSavedCandidates] = useState<CandidateInterface[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('savedCandidates');
    if (saved) {
      setSavedCandidates(JSON.parse(saved));
    }
  }, []);

  if (savedCandidates.length === 0) {
    return <p>No candidates have been accepted.</p>;
  }

  return (
    <>
      <h1>Potential Candidates</h1>
      <div>
        {savedCandidates.map((candidate, index) => (
          <div key={index}>
            <img src={candidate.avatar_url} alt={`${candidate.name}'s avatar`} />
            <h2>{candidate.name}</h2>
            <p>Username: {candidate.login}</p>
            <p>Location: {candidate.location}</p>
            <p>Email: {candidate.email}</p>
            <p>Company: {candidate.company}</p>
            <a href={candidate.html_url}>Profile</a>
          </div>
        ))}
      </div>
    </>
  );
};

export default SavedCandidates;
