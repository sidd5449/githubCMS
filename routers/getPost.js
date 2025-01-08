import express from 'express';
import { getSinglePostController } from '../controllers/getController.js';

const router = express.Router();
router.get('/:id', getSinglePostController);

export default router;
