import { createConfirmChannel } from './channel';

(async () => {
  const { channel, queueName } = await createConfirmChannel();

  channel.sendToQueue(queueName, Buffer.from('hello world'), { persistent: true }, (err) => {
    if (err) console.error('failed to queue message: ', err);
  });
})();
