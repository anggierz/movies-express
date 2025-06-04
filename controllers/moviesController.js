import { readJSON, writeJSON } from "../services/fileService.js";
import { validateRequiredFields, validateStringLength } from "../validations/moviesValidations.js";
import { randomUUID } from "node:crypto";
import { movieSchema } from "../schemas.js";
const MOVIES_FILE = process.env.MOVIES_FILE;


export const getMovies = (req, res) => {
  const movies = readJSON(MOVIES_FILE);
  res.json(movies);
};

export const createMovies = (req, res) => {
  const movies = readJSON(MOVIES_FILE);
  const newMovie = req.body;

  //#region Validaciones antes de implementar Joi

  // const errorsOnRequiredFields = validateRequiredFields(newMovie);
  // if (errorsOnRequiredFields?.length > 0) {
  //   return res.status(400).json({ errors: errorsOnRequiredFields });
  // }

  // const errorOnStringLength = validateStringLength(newMovie, "title", 3);
  // if (errorOnStringLength) {
  //   return res.status(400).json({ error: errorOnStringLength });
  // }

  //#endregion


  const { error, value } = movieSchema.validate(req.body);

    // If validation fails, return an error response
    if (error) {
        return res.status(400).json({
            error: error.details[0].message
        });
    }

  newMovie.id = randomUUID();

  movies.push(newMovie);
  writeJSON(MOVIES_FILE, movies);
  res.status(201).json(newMovie);
};


export const updateMovies = (req, res) => {
  const movies = readJSON(MOVIES_FILE);
  const { id } = req.params;
  const updatedData = req.body;

  const movieIndex = movies.findIndex((movie) => movie.id === id);
  if (movieIndex === -1) {
    return res.status(404).json({ error: "Movie not found" });
  }

  //#region Validaciones antes de implementar Joi

  // const errorsOnRequiredFields = validateRequiredFields(updatedData);
  // if (errorsOnRequiredFields?.length > 0) {
  //   return res.status(400).json({ errors: errorsOnRequiredFields });
  // }

  // const errorOnStringLength = validateStringLength(updatedData, "title", 3);
  // if (errorOnStringLength) {
  //   return res.status(400).json({ error: errorOnStringLength });
  // }

  //#endregion

  const { error, value } = movieSchema.validate(req.body);

    // If validation fails, return an error response
    if (error) {
        return res.status(400).json({
            error: error.details[0].message
        });
    }

  updatedData.id = id;
  movies[movieIndex] = updatedData;

  writeJSON(MOVIES_FILE, movies);
  res.status(200).json(updatedData);
};

export const deleteMovies = (req, res) => {
  const movies = readJSON(MOVIES_FILE);
  const { id } = req.params;

  const movieIndex = movies.findIndex((movie) => movie.id === id);
  if (movieIndex === -1) {
    return res.status(404).json({ error: "Movie not found" });
  }

  const deletedMovie = movies.splice(movieIndex, 1);
  writeJSON(MOVIES_FILE, movies);
  res.json({ message: `Movie with id: ${id} deleted`});
};
