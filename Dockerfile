FROM node:22.13.0-alpine
WORKDIR /app
ADD package*.json .
RUN npm install
ADD . .
CMD ["node", "index.js"]
