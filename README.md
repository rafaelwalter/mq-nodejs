# NodeJS Workers communication with RabbitMQ
Example usage of [amqplib](https://github.com/squaremo/amqp.node) with RabbitMQ and NodeJS worker threads.

# Usage

## Requirements

* [docker](https://docs.docker.com/engine/install/ubuntu/)
* [docker compose](https://docs.docker.com/compose/install/)

## Build

```
docker build . -t mq
```

## Run
```
docker-compose -f docker-compose.yml up
```
