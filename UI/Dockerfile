FROM node:20.12.2-alpine3.18
WORKDIR /app
COPY package.json ./
RUN yarn
COPY  . .
EXPOSE 3000
CMD ["yarn","dev"]