import { Router } from 'express';
import * as controller from './auth.controller';

const router = Router();

router.post('/register', controller.register);


export const authRoute= router;