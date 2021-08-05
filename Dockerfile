FROM node:lts-alpine
RUN npm install -g http-server
WORKDIR /app
COPY package*.json ./
RUN yarn install
COPY . .
ENV NODE_ENV=production
RUN yarn build

EXPOSE 8080
CMD [ "http-server", "dist" ]