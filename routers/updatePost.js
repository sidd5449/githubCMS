import express from 'express';
import { updatePostController } from '../controllers/updateController.js';

const router = express.Router();
router.post('/:id', updatePostController);

export default router;