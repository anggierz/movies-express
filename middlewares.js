import { movieSchema } from "./schemas.js";
import morgan from "morgan";
import { createStream } from "rotating-file-stream";
const LOGS_PATH = process.env.LOGS_PATH;
const MORGAN_FORMAT = process.env.MORGAN_FORMAT;

morgan.token("datetime", () => {
  return new Date().toISOString();
});

const accessLogStream = createStream("access.log", {
  interval: "1d",
  path: LOGS_PATH,
});

export const validateMovie = (req, res, next) => {
  const { error } = movieSchema.validate(req.body, { abortEarly: false });
  if (error) {
    const messages = error.details.map((detail) => detail.message);
    return res.status(400).json({ errors: messages });
  }
  next();
};

export const logWithMorgan = morgan(MORGAN_FORMAT, { stream: accessLogStream });
