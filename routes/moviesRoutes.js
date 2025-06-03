import express from 'express';
import { getMovies, createMovies, updateMovies, deleteMovies } from '../controllers/moviesController.js';
import { validateMovie } from '../middlewares.js';


const router = express.Router();
router.get('/', getMovies);
router.post('/', validateMovie, createMovies);
router.put('/:id', validateMovie, updateMovies);
router.delete('/:id', deleteMovies);



export default router;