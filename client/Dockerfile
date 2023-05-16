FROM node:16-alpine

WORKDIR /react

ENV PATH /react/node_modules/.bin:$PATH

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 8080

WORKDIR /react/dist

CMD ["http-server", "--cors"]
