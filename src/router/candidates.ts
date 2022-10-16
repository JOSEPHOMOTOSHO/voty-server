import { Router } from 'express';
import { getCandidates } from '../controller/candidate';

const candidateRouter = Router()
candidateRouter.get('/', getCandidates)

export default candidateRouter;
