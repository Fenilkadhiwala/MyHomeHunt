FROM node:18
WORKDIR /app
COPY package.json ./
COPY build build
RUN yarn install
ENTRYPOINT [ "node","build/index.js" ]

