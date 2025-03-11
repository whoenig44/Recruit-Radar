import React from 'react';

interface CandidateListProps {
  candidates: Array<{
    name: string;
    username: string;
    location: string;
    avatar: string;
    email: string;
    html_url: string;
    company: string;
  }>;
}

const CandidateList: React.FC<CandidateListProps> = ({ candidates }) => {
  return (
    <div>
      {candidates.length === 0 ? (
        <p>No candidates have been accepted.</p>
      ) : (
        candidates.map((candidate, index) => (
          <div key={index}>
            <img src={candidate.avatar} alt={`${candidate.name}'s avatar`} />
            <h2>{candidate.name}</h2>
            <p>Username: {candidate.username}</p>
            <p>Location: {candidate.location}</p>
            <p>Email: {candidate.email}</p>
            <p>Company: {candidate.company}</p>
            <a href={candidate.html_url}>Profile</a>
          </div>
        ))
      )}
    </div>
  );
};

export default CandidateList;