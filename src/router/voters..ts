import { Router } from 'express';
import {
  getSingleVoter,
  getVoters,
  voteSingleCandidate,
  addNewVoter,
  notifyTheVoter,
} from '../controller/voter';

const voterRouter = Router();
voterRouter.get('/', getVoters);
voterRouter.get('/:voterId', getSingleVoter);

voterRouter.put('/:voterId/:candidateId', voteSingleCandidate);
voterRouter.post('/register', addNewVoter);
voterRouter.post('/notify', notifyTheVoter);

export default voterRouter;
