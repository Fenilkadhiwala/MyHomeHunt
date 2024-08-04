FROM node:18
WORKDIR /app
COPY  package.json ./
COPY build build
RUN yarn install
EXPOSE 4443
ENTRYPOINT [ "node" ,"build/index.js"]
