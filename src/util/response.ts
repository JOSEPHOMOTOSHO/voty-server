import { Keyable, MakeResponse } from '../types/interface.generic';
import {  Response } from 'express';
import { ValidationError } from 'joi';

const message = require('../lang/eng.json');

const getMessage = (key: string): string => {
  return message[key];
};

const makeResponse = (
  status: number | boolean,
  message: string,
  data: Keyable
): MakeResponse => {
  if (status) {
    return {
      status,
      message: message,
      data: data,
    };
  }
  return {
    status,
    message: message,
    data: data,
  };
};

const sendSuccessResponse = (
  res: Response,
  message: string,
  data: Keyable,
  statusCode: number = 200
): Response => {
  return res.status(statusCode).json({
    status: true,
    message: getMessage(message) || message,
    data: data,
  });
};

const sendErrorResponse = (
  res: Response,
  message: string,
  data: Keyable,
  statusCode: number = 400
): Response => {
  return res.status(statusCode).json({
    status: false,
    message: getMessage(message) || message,
    data: data,
  });
};

const handleValidationError = (
  validateErrorData: ValidationError,
  res: Response
): Response => {
  const message = validateErrorData.details[0].message;
  return sendErrorResponse(res, message, {}, 400);
};

export {
  sendSuccessResponse,
  sendErrorResponse,
  handleValidationError,
  makeResponse,
};
