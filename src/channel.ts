import amqplib, { ConfirmChannel } from 'amqplib';

export const createConfirmChannel = async (): Promise<{ channel: ConfirmChannel, queueName: string }> => {
  const conn = await amqplib.connect(process.env.RABBITMQ_URL as string);
  const channel = await conn.createConfirmChannel();

  const queueName = 'rabbitmq';
  await channel.assertQueue(queueName, { durable: true });

  return { channel, queueName };
};
