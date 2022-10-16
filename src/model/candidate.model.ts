/* eslint-disable func-names */
/* eslint-disable no-param-reassign */
import mongoose, { Schema, model } from 'mongoose';

export interface ICandidate {
  firstName: String;
  lastName: String;
  candidateId: String
  party: String;
  picture: String;
  logo: String;
  position: Boolean;
  voters: [mongoose.Types.ObjectId];
  verified: Boolean;
}

const candidateSchema = new Schema<ICandidate>(
  {
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    },
    candidateId: {
      type: String,
      required: true,
      unique: true
    },
    party: {
      type: String,
      required: true,
    },
    voters: [{
      type: Schema.Types.ObjectId,
      ref: "Voter"
    }],
    picture: {
      type: String,
    },
    logo: {
      type: String,
    },
    position: {
      type: String,
    },
    verified: {
      type: Boolean,
      required: true,
      default: false
    },
  },
  {
    timestamps: true,
  },
);

const Candidate = model<ICandidate>('Candidate', candidateSchema);

export default Candidate;
