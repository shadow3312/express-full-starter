import express from 'express';
import cors from 'cors';
import routes from '@/routes';
import { env } from '@/config/env';
import logger from '@/utils/logger';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from '../swagger.json';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', routes);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

export default app;