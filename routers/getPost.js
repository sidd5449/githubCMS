import express from 'express';
import { getController } from '../controllers/getController.js';

const router = express.Router();
router.post('/:id', getController);

export default router;