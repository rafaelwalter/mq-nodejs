import path from 'path';
import { Worker, SHARE_ENV } from 'worker_threads';

console.log('spawning workers...');

const publisher = new Worker(path.join(__dirname, './publisher.js'), { env: SHARE_ENV });
const consumer = new Worker(path.join(__dirname, './consumer.js'), { env: SHARE_ENV });

publisher.on('error', (err) => {
  console.error('publisher error: ', err);
});

consumer.on('error', (err) => {
  console.error('consumer error: ', err);
});

console.log('workers spawned...');
