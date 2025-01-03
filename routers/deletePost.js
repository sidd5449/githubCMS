import express from 'express';
import { deleteController } from '../controllers/deleteController.js';

const router = express.Router();
router.post('/:id', deleteController);

export default router;