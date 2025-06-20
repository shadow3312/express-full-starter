import app from './app';
import { env } from '@/config/env';
import logger from '@/utils/logger';

const PORT = env.PORT || 3001;

app.listen(PORT, () => {
  logger.info(`Server running on http://localhost:${PORT}`);
});