import logger from './config/logger';
import database from './config/database';
import swaggerDocs from './config/swagger';
import config, { environments } from './config/config';
import app from './app';

if (config.env !== environments.PRODUCTION) {
  app.listen(config.port, async () => {
    logger.info(`API rodando em http://${config.publicUrl}:${config.port}`);

    await database();

    swaggerDocs(app, config.publicUrl, config.port);
  });
} else {
  app.listen(config.port, async () => {
    logger.info(`API rodando em http://${config.publicUrl}`);

    await database();

    swaggerDocs(app, config.publicUrl, config.port);
  });
}
