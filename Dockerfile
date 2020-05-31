FROM node:14-alpine AS build
WORKDIR /build
COPY ./package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM build AS build-prod
WORKDIR /build-prod
COPY --from=build ./build/dist ./dist
COPY ./package*.json ./
RUN npm ci --production

FROM node:14-alpine AS prod
RUN apk add bash
WORKDIR /app
COPY --from=build-prod ./build-prod ./
RUN wget https://raw.githubusercontent.com/vishnubob/wait-for-it/master/wait-for-it.sh
RUN chmod +x wait-for-it.sh
CMD ["./wait-for-it.sh" , "rabbitmq:5672" , "--strict" , "--timeout=10" , "--" , "node", "dist"]
