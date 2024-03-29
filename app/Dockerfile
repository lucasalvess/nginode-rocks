FROM node:15

WORKDIR /usr/src/app
COPY /src src

RUN npm install mysql && npm install express --save

EXPOSE 3000

CMD ["node", "src/index.js"]
