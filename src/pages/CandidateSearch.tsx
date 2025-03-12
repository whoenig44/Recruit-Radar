import React, { useState, useEffect } from 'react';
import Candidate from '../components/Candidate';
import { Candidate as CandidateInterface } from '../interfaces/Candidate.interface';
import { searchGithubUser, searchGithub } from '../api/API';

const CandidateSearchPage: React.FC = () => {
  const [candidates, setCandidates] = useState<CandidateInterface[]>([]);
  const [currentCandidateIndex, setCurrentCandidateIndex] = useState(0);
  const [savedCandidates, setSavedCandidates] = useState<CandidateInterface[]>(() => {
    const saved = localStorage.getItem('savedCandidates');
    return saved ? JSON.parse(saved) : [];
  });

  const getUserInfo = async () => {
    const candidateList: any = await searchGithub();
    const candidateData: CandidateInterface[] = await Promise.all(
      candidateList.map(async (candidate: any) => {
        const data = await searchGithubUser(candidate.login);
        return data;
      })
    );
    setCandidates(candidateData);
  };

  useEffect(() => {
    getUserInfo();
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
