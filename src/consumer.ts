import { ConsumeMessage } from 'amqplib';

import { createConfirmChannel } from './channel';

(async () => {
  const { channel, queueName } = await createConfirmChannel();

  channel.prefetch(1);

  channel.consume(queueName, (message) => {
    console.log('consumed message: ', message?.content?.toString());
    channel.ack(message as ConsumeMessage);
  }, { noAck: false });
})();
