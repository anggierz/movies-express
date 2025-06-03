import { readJSON, writeJSON } from "../services/fileService.js";
import { validateRequiredFields, validateStringLength } from "../validations/moviesValidations.js";
import { randomUUID } from "node:crypto";
const MOVIES_FILE = process.env.MOVIES_FILE;


export const getMovies = (req, res) => {
  const movies = readJSON(MOVIES_FILE);
  res.json(movies);
};

export const createMovies = (req, res) => {
  const movies = readJSON(MOVIES_FILE);
  const newMovie = req.body;

  const errorsOnRequiredFields = validateRequiredFields(newMovie);
  if (errorsOnRequiredFields?.length > 0) {
    return res.status(400).json({ errors: errorsOnRequiredFields });
  }

  const errorOnStringLength = validateStringLength(newMovie, "title", 3);
  if (errorOnStringLength) {
    return res.status(400).json({ error: errorOnStringLength });
  }

  newMovie.id = randomUUID();

  movies.push(newMovie);
  writeJSON(MOVIES_FILE, movies);
  res.status(201).json(newMovie);
};
