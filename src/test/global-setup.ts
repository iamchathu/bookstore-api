import createConnection from '../config/database';

import { runSeed } from './utils';

const globalSetup = async (): Promise<void> => {
  try {
    await createConnection();
    await runSeed();
  } catch (err) {
    console.error(err);
  }
};

export default globalSetup;
