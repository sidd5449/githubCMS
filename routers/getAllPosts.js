import express from 'express';
import { getAllPostsController } from '../controllers/getController.js';

const router = express.Router();
router.post('/', getAllPostsController);

export default router;