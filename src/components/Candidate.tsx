import React from 'react';
import { Candidate as CandidateInterface } from '../interfaces/Candidate.interface';

interface CandidateProps {
  candidate: CandidateInterface;
}

const Candidate: React.FC<CandidateProps> = ({ candidate }) => {
  return (
    <div>
      <img src={candidate.avatar_url} alt={`${candidate.name}'s avatar`} />
      <h2>{candidate.name}</h2>
      <p>Username: {candidate.login}</p>
      <p>Location: {candidate.location}</p>
      <p>Email: {candidate.email}</p>
      <p>Company: {candidate.company}</p>
      <a href={candidate.html_url}>Profile</a>
    </div>
  );
};

export default Candidate;