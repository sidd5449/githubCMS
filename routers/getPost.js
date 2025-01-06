import express from 'express';
import { getSinglePostController } from '../controllers/getController.js';

const router = express.Router();
router.post('/:id', getSinglePostController);

export default router;