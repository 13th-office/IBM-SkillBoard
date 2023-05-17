FROM node:16-alpine

WORKDIR /react

ENV PATH /react/node_modules/.bin:$PATH

COPY package.json package-lock.json ./

RUN npm ci

COPY . .

RUN npm run build

WORKDIR /react/dist

EXPOSE 8080

CMD ["npx", "http-server", "--cors"]
