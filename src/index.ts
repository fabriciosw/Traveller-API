import logger from './config/logger';
import database from './config/database';
import swaggerDocs from './config/swagger';
import config, { environments } from './config/config';
import app from './app';

app.listen(config.port, async () => {
  await database();

  swaggerDocs(app, config.publicUrl, config.port);

  if (environments.DEVELOPMENT)
    logger.info(`API rodando em http://${config.publicUrl}:${config.port}`);
  else logger.info(`API rodando em http://${config.publicUrl}`);
});
