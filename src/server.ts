import express, { Response, Request } from 'express';
import { json, urlencoded } from 'body-parser';
import helmet from 'helmet';
import cors from 'cors';
import { Server } from 'http';

import config from './config';
import { autoLoadModels, autoLoadRoutes } from './utils/autoLoad';
import createConnection from './config/database';

const setupApp = async (): Promise<Server | undefined> => {
  const app = express();

  await createConnection();
  autoLoadModels();

  app.set('port', config.app.port);

  app.use(helmet.xssFilter());
  app.use(helmet.hidePoweredBy());
  app.use(helmet.noSniff());

  app.use(urlencoded({ extended: true }));
  app.use(json());
  app.use(cors());

  autoLoadRoutes(app);

  app.get('/', (req: Request, res: Response) => {
    res.send('Welcome to API Server!');
  });

  const server = app.listen(app.get('port'), () => {
    console.log(`listening on *:${app.get('port')}`);
  });
  return server;
};

export default setupApp;
