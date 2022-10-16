import { Request, Response } from "express";
import { getVoter, voteCandidate , getAllVoters} from "../service/voter.service";

const getSingleVoter = async (req: Request, res: Response) => {
    try {
        const voter = await getVoter(req.params)
        return res.status(200).json({
            status: true,
            message: 'Success',
            data: voter,
        });
    } catch (error) {
        console.log(error)
    }

}

const getVoters = async (_req: Request, res: Response) => {
    try {
        const voters = await getAllVoters()
        return res.status(200).json({
            status: true,
            message: 'Success',
            data: voters,
        });
    } catch (error) {
        console.log(error)
    }

}


const voteSingleCandidate = async (req: Request, res: Response) => {
    try {
        const vote = await voteCandidate(req.params)
        return res.status(200).json({
            status: true,
            message: 'Success',
            data: vote,
        });
    } catch (error) {
        console.log(error)
    }

}



export {
    getSingleVoter,
    voteSingleCandidate,
    getVoters
}