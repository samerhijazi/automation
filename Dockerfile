FROM node:alpine3.10

USER 0
COPY . /sogeti
WORKDIR /sogeti
RUN npm install
RUN npm run driver-update
RUN npm run driver-status

RUN npm run test-ui
RUN npm run test-api
