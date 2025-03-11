import React from 'react';

interface CandidateProps {
  candidate: {
    name: string;
    username: string;
    location: string;
    avatar: string;
    email: string;
    html_url: string;
    company: string;
  };
}

const Candidate: React.FC<CandidateProps> = ({ candidate }) => {
  return (
    <div>
      <img src={candidate.avatar} alt={`${candidate.name}'s avatar`} />
      <h2>{candidate.name}</h2>
      <p>Username: {candidate.username}</p>
      <p>Location: {candidate.location}</p>
      <p>Email: {candidate.email}</p>
      <p>Company: {candidate.company}</p>
      <a href={candidate.html_url}>Profile</a>
    </div>
  );
};

export default Candidate;