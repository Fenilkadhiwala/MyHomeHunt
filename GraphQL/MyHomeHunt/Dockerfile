FROM node
WORKDIR /app
COPY package.json ./
RUN yarn
COPY . .
RUN yarn global add typescript
RUN yarn build
EXPOSE 5000
ENTRYPOINT [ "node","build/index.js" ]

