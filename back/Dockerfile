FROM node:18

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --production

COPY . .

EXPOSE 5100

CMD ["npm", "run", "start"]