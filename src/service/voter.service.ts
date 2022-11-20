import Voter from '../model/voters.model';
import Candidate from '../model/candidate.model';
import { generateVoterId } from '../util/generateVoterId';
import createHttpError from 'http-errors';
import { sendMyMail } from '../util/sendgrid';
import { welcomeTemplate } from '../util/welcome-email-template';
import { notificationTemplate } from '../util/notification-email-template';

const getVoter = async (payload: any) => {
  const { voterId } = payload;
  const existingVoter = await Voter.findOne({ voterId: voterId });
  if (existingVoter) {
    return existingVoter as any;
  } else {
    return "voter doesn't exist";
  }
};

// getAllVoters
const getAllVoters = async () => {
  const existingVoters = await Voter.find({});
  if (existingVoters) {
    return existingVoters;
  } else {
    return 'error fetching voters';
  }
};

const voteCandidate = async (payload: any) => {
  const { voterId, candidateId } = payload;
  const existingVoter = await getVoter(payload);
  if (existingVoter._id) {
    if (existingVoter.voted) {
      return 'voter already voted';
    } else {
      await Voter.findOneAndUpdate({ voterId }, { voted: true });
      await Candidate.findOneAndUpdate(
        { candidateId },
        { $push: { voters: existingVoter._id } },
      );
      return 'voted';
    }
  } else {
    return "voter doesn't exist";
  }
};

const registerVoter = async (payload: any) => {
  const { firstName, lastName, phoneNumber, email, address } = payload;
  const existingVoter = await Voter.findOne({ email: email });
  console.log(existingVoter);
  if (existingVoter) {
    const me = createHttpError(400, 'Email address already exists');
    console.log(me);
    return { error: 'Email address already exists' };
    // return me;
  } else {
    try {
      const newVoter = {
        firstName,
        lastName,
        voterId: generateVoterId(),
        phoneNumber,
        email,
        address,
      };
      await Voter.create(newVoter);
      const message = await welcomeTemplate(firstName);
      sendMyMail(email, 'Welcome to Voty', message);
      sendMyMail(
        'chuksdozie48@gmail.com',
        'Sign up to Voty',
        `Hello Dev Chuks, please add ${email} to the testers on voty`,
      );
      return 'voter registration successful';
    } catch (error) {
      return error;
    }
  }
};

const notifyVoter = async (payload: any) => {
  const { email } = payload;
  const existingVoter = await Voter.findOne({ email: email });
  console.log(existingVoter);
  if (!existingVoter) {
    const me = createHttpError(400, 'Email address already exists');
    console.log(me);
    return { error: 'No found record found' };
    // return me;
  } else {
    try {
      const message = await notificationTemplate(
        existingVoter.firstName,
        existingVoter.voterId,
      );
      sendMyMail(email, 'Now a tester on Voty', message);
      // sendMyMail(
      //   'chuksdozie48@gmail.com',
      //   'Sign up to Voty',
      //   `Hello Dev Chuks, please add ${email} to the testers on voty`,
      // );
      return 'voter notification complete';
    } catch (error) {
      return error;
    }
  }
};

export { getVoter, voteCandidate, getAllVoters, registerVoter, notifyVoter };
