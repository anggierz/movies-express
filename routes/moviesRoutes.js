import express from 'express';
import { getMovies, createMovies, updateMovies, deleteMovies } from '../controllers/moviesController.js';


const router = express.Router();
router.get('/', getMovies);
router.post('/', createMovies);
router.put('/:id', updateMovies);
router.delete('/:id', deleteMovies);



export default router;