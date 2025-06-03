import { readJSON, writeJSON } from "../services/fileService.js";
import { validateRequiredFields } from "../validations/moviesValidations.js";
const MOVIES_FILE = process.env.MOVIES_FILE;


export const getMovies = (req, res) => {
  const movies = readJSON(MOVIES_FILE);
  res.json(movies);
};

export const createMovies = (req, res) => {
  const movies = readJSON(MOVIES_FILE);
  const newMovie = req.body;
  const errors = validateRequiredFields(newMovie);

  if (errors.length > 0) {
    return res.status(400).json({ errors });
  }

  movies.push(newMovie);
  writeJSON(MOVIES_FILE, movies);
  res.status(201).json(newMovie);
};
