import Candidate from "../model/candidate.model";
// import { Types } from "mongoose"
const Candidates = [
    new Candidate({
        _id: '6d4155cfcd68f4086d8df491',
        firstName: 'peter',
        lastName: "obi",
        candidateId: "9df491",
        party: "labour party",
        voters: [],
        picture: "11111.jpg",
        logo: "22222.jpg",
        position: "president",
        verified: true
    }),
    new Candidate({
        _id: '6d4155cfcd68f4086d8df492',
        firstName: 'atiku',
        lastName: "abubakar",
        candidateId: "9df492",
        party: "people\'s democratic party",
        voters: [],
        picture: "11111.jpg",
        logo: "22222.jpg",
        position: "president",
        verified: true
    }),
    new Candidate({
        _id: '6d4155cfcd68f4086d8df493',
        firstName: 'asiwaju',
        lastName: "tinubu",
        candidateId: "9df493",
        party: "all progressive congress",
        voters: [],
        picture: "11111.jpg",
        logo: "22222.jpg",
        position: "president",
        verified: true
    }),
];

export default Candidates;