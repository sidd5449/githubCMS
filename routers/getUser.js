import express from 'express';
import { getUserController } from '../controllers/getController.js';

const router = express.Router();
router.post('/:id', getUserController);

export default router;