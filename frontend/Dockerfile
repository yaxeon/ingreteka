FROM node:11-alpine as build-stage
WORKDIR /app
COPY package.json /app
COPY yarn.lock /app
RUN yarn install --frozen-lockfile
COPY . /app
RUN REACT_APP_CDN=https://ingreteka.b-cdn.net GENERATE_SOURCEMAP=false yarn build
EXPOSE 8080
CMD [ "node", "server.js" ]