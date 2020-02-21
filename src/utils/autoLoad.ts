import fg from 'fast-glob';
import path from 'path';
import { Application } from 'express';

const getRoutesPattern = (): string => {
  if (process.env.NODE_ENV === 'production') {
    return 'dist/modules/**/*.routes.js';
  }
  return 'src/modules/**/*.routes.ts';
};

export const autoLoadRoutes = async (app: Application): Promise<void> => {
  const routes = await fg(getRoutesPattern());
  routes.forEach(
    async (route): Promise<void> => {
      try {
        const router = await import(path.relative(__dirname, route.toString()));
        router.default(app);
        console.info(`${route} - Loaded`);
      } catch (err) {
        console.error(`${route} loading error 
          ${err}`);
      }
    },
  );
};

const getModelsPattern = (): string => {
  if (process.env.NODE_ENV === 'production') {
    return 'dist/modules/**/*.schema.js';
  }
  return 'src/modules/**/*.schema.ts';
};

export const autoLoadModels = async (): Promise<void> => {
  const models = await fg(getModelsPattern());
  models.forEach(
    async (model): Promise<void> => {
      try {
        await import(path.relative(__dirname, model.toString()));
        console.info(`${model} - Loaded`);
      } catch (err) {
        console.error(`${model} loading error
         ${err}`);
      }
    },
  );
};
