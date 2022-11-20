import { Request, Response } from 'express';
import {
  getVoter,
  voteCandidate,
  getAllVoters,
  registerVoter,
  notifyVoter,
} from '../service/voter.service';

const getSingleVoter = async (req: Request, res: Response) => {
  try {
    const voter = await getVoter(req.params);
    return res.status(200).json({
      status: true,
      message: 'Success',
      data: voter,
    });
  } catch (error) {
    console.log(error);
  }
};

const getVoters = async (_req: Request, res: Response) => {
  try {
    const voters = await getAllVoters();
    return res.status(200).json({
      status: true,
      message: 'Success',
      data: voters,
    });
  } catch (error) {
    console.log(error);
  }
};

const voteSingleCandidate = async (req: Request, res: Response) => {
  try {
    const vote = await voteCandidate(req.params);
    return res.status(200).json({
      status: true,
      message: 'Success',
      data: vote,
    });
  } catch (error) {
    console.log(error);
  }
};

const addNewVoter = async (req: Request, res: Response) => {
  try {
    const voter = await registerVoter(req.body);

    return res.status(200).json({
      status: true,
      message: 'Success',
      data: voter,
    });
  } catch (error) {
    console.log(2332323, error);
    return res.status(400).json({
      status: true,
      message: error,
      data: {},
    });
  }
};

const notifyTheVoter = async (req: Request, res: Response) => {
  try {
    const result = await notifyVoter(req.body);

    return res.status(200).json({
      status: true,
      message: 'Success',
      data: result,
    });
  } catch (error) {
    console.log(2332323, error);
    return res.status(400).json({
      status: true,
      message: error,
      data: {},
    });
  }
};

export {
  getSingleVoter,
  voteSingleCandidate,
  getVoters,
  addNewVoter,
  notifyTheVoter,
};
