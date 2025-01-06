import express from 'express';
import { deletePostController } from '../controllers/deleteController.js';

const router = express.Router();
router.post('/:id', deletePostController);

export default router;