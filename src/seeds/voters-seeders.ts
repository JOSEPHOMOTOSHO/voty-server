import Voter from '../model/voters.model';
import { Types } from "mongoose"
    ;
const Voters = [
    new Voter({
        _id: new Types.ObjectId('5d4155cfcd68f4086d8df491'),
        firstName: 'voterfirstname1',
        lastName: "voterlastname1",
        voterId: "8df491",
        phoneNumber: "08100000001",
        email: 'voterfirstname1@gmail.com',
        address: "no 1",
        voted: false,
        verified: true
    }),

    new Voter({
        _id: new Types.ObjectId('5d4155cfcd68f4086d8df492'),
        firstName: 'voterfirstname2',
        lastName: "voterlastname2",
        voterId: "8df492",
        phoneNumber: "08100000002",
        email: 'voterfirstname2@gmail.com',
        address: "no 2",
        voted: false,
        verified: true
    }),

    new Voter({
        _id: new Types.ObjectId('5d4155cfcd68f4086d8df493'),
        firstName: 'voterfirstname3',
        lastName: "voterlastname3",
        voterId: "8df493",
        phoneNumber: "08100000003",
        email: 'voterfirstname3@gmail.com',
        address: "no 3",
        voted: false,
        verified: true
    }),

    new Voter({
        _id: new Types.ObjectId('5d4155cfcd68f4086d8df494'),
        firstName: 'voterfirstname4',
        lastName: "voterlastname4",
        voterId: "8df494",
        phoneNumber: "08100000004",
        email: 'voterfirstname4@gmail.com',
        address: "no 4",
        voted: false,
        verified: true
    }),

    new Voter({
        _id: new Types.ObjectId('5d4155cfcd68f4086d8df495'),
        firstName: 'voterfirstname5',
        lastName: "voterlastname5",
        voterId: "8df495",
        phoneNumber: "08100000005",
        email: 'voterfirstname5@gmail.com',
        address: "no 5",
        voted: false,
        verified: true
    }),

    new Voter({
        _id: new Types.ObjectId('5d4155cfcd68f4086d8df496'),
        firstName: 'voterfirstname6',
        lastName: "voterlastname6",
        voterId: "8df496",
        phoneNumber: "08100000006",
        email: 'voterfirstname6@gmail.com',
        address: "no 6",
        voted: false,
        verified: true
    }),

    new Voter({
        _id: new Types.ObjectId('5d4155cfcd68f4086d8df497'),
        firstName: 'voterfirstname7',
        lastName: "voterlastname7",
        voterId: "8df497",
        phoneNumber: "08100000007",
        email: 'voterfirstname7@gmail.com',
        address: "no 7",
        voted: false,
        verified: true
    }),

    new Voter({
        _id: new Types.ObjectId('5d4155cfcd68f4086d8df498'),
        firstName: 'voterfirstname8',
        lastName: "voterlastname8",
        voterId: "8df498",
        phoneNumber: "08100000008",
        email: 'voterfirstname8@gmail.com',
        address: "no 8",
        voted: false,
        verified: true
    }),


];

export default Voters;
