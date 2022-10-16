import { connect, ConnectOptions } from 'mongoose';

const mongooseDB = () =>
  connect(
    process.env.MONGODB_URI as string,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      retryWrites: false,
    } as ConnectOptions,
  );

export default mongooseDB;
