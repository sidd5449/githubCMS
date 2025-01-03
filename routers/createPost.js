import express from 'express';
import { createPostController } from '../controllers/createController.js';

const router = express.Router();
router.post('/', createPostController);

export default router;