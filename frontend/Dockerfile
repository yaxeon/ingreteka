FROM node:11-alpine
# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
# Install app dependencies
COPY . /usr/src/app
RUN yarn install --frozen-lockfile
RUN yarn build

CMD [ "yarn", "start" ]