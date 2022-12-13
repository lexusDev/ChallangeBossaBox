FROM node:latest

WORKDIR /usr/app

COPY package.json ./

RUN yarn install

COPY . .

USER 10014

EXPOSE 3000

CMD ["npm", "run", "start"]
