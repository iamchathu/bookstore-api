import createConnection from '../config/database';
import { runSeed } from './utils';

const globalSetup = async () => {
  await createConnection();
  await runSeed();
};

export default globalSetup;
