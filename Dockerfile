FROM node:14.7.0-buster
WORKDIR /home/node/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 80
CMD ["node", "main.js"]
