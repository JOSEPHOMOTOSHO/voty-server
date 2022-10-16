import { Application } from 'express';
import candidateRouter from './candidates';
import voterRouter from './voters.';



const index = (app: Application) => {
  app.use('/candidate', candidateRouter);
  app.use('/voter', voterRouter)
};

export default index;
