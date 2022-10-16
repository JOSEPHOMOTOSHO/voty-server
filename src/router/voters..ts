import { Router } from 'express';
import { getSingleVoter, getVoters, voteSingleCandidate } from '../controller/voter';

const voterRouter = Router()
voterRouter.get('/',getVoters)
voterRouter.get('/:voterId', getSingleVoter)


voterRouter.put('/:voterId/:candidateId', voteSingleCandidate)


export default voterRouter;
