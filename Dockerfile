FROM node:8.9.4-alpine

ENV NODE_ENV=development

 RUN npm install --save-dev karma && \
 npm install -g karma-cli && \
 npm install --save-dev karma-jasmine && \
 npm install --save-dev karma-mocha-reporter && \
 npm install --save-dev karma-requirejs

WORKDIR /regacy
