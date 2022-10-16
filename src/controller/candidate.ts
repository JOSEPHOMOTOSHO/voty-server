import { Request, Response } from "express";
import { getAllCandidates } from "../service/candidate.service";



const getCandidates = async (_req: Request, res: Response) => {
    try {
        const candidates = await getAllCandidates()
        return res.status(200).json({
            status: true,
            message: 'Success',
            data: candidates,
        });
    } catch (error) {
        console.log(error)
    }

}


export {
    getCandidates
}