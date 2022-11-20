import Candidate from '../model/candidate.model';

const getAllCandidates = async () => {
  const existingCandidates = await Candidate.find({});
  if (existingCandidates) {
    return existingCandidates;
  } else {
    return 'error fetching candidates';
  }
};

export { getAllCandidates };
