FROM node:10.16.0-stretch as build

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --only=production

COPY src .

FROM node:10.16.0-stretch-slim

WORKDIR /app

COPY --from=build /usr/src/app .

EXPOSE 3000

# TODO: replace with server.js
CMD [ "node", "app.js" ]