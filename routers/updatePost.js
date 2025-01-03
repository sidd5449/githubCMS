import express from 'express';
import { updateController } from '../controllers/updateController.js';

const router = express.Router();
router.post('/:id', updateController);

export default router;