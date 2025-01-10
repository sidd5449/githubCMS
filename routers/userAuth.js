import express from 'express';
import { authenticationController } from '../controllers/authenticationController.js';

const router = express.Router();

router.post('/', authenticationController);

export default router;