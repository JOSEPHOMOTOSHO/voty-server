/* eslint-disable func-names */
/* eslint-disable no-param-reassign */
import { Schema, model } from 'mongoose';

export interface IVoter {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  voterId: string;
  address: string;
  voted: boolean;
  email: string;
  verified: boolean;
}

const voterSchema = new Schema<IVoter>(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    voterId: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phoneNumber: {
      type: String,
    },
    address: {
      type: String,
    },
    voted: {
      type: Boolean,
      required: true,
      default: false,
    },
    verified: {
      type: Boolean,
      required: true,
      default: true,
    },
  },
  {
    timestamps: true,
  },
);

const Voter = model<IVoter>('Voter', voterSchema);

export default Voter;
