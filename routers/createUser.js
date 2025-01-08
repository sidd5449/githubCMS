import express from 'express';
import { createUserController } from '../controllers/createController.js';

const router = express.Router();
router.post('/', createUserController);

export default router;