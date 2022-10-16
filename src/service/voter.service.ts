import Voter from "../model/voters.model"
import Candidate from "../model/candidate.model"

const getVoter = async (payload: any) => {
    const { voterId } = payload
    const existingVoter = await Voter.findOne({ voterId: voterId })
    if (existingVoter) {
        return existingVoter as any
    } else {
        return 'voter doesn\'t exist'
    }
}

// getAllVoters
const getAllVoters = async () => {
    const existingVoters = await Voter.find({})
    if (existingVoters) {
        return existingVoters
    } else {
        return 'error fetching voters'
    }
}


const voteCandidate = async (payload: any) => {
    const { voterId, candidateId } = payload
    const existingVoter = await getVoter(payload)
    if (existingVoter._id) {
        if (existingVoter.voted) {
            return 'voter already voted'
        } else {
            await Voter.findOneAndUpdate({ voterId }, { voted: true })
            await Candidate.findOneAndUpdate({ candidateId }, { $push: { voters: existingVoter._id } })
            return 'voted'
        }
    } else {
        return 'voter doesn\'t exist'
    }
}


export {
    getVoter,
    voteCandidate,
    getAllVoters
}

