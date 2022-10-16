import { config } from 'dotenv';
import app from './server';
import mongooseDB from './database';
import { logger } from './logger';

config();
const port = process.env.PORT || 3000;
mongooseDB()
  .then(async () => {
    app.listen(port, () => {
      logger.info(`Listening to port ${port}`);
    });
  })
  .catch((e) => {
    logger.info(e);
    process.exit(1);
  });
