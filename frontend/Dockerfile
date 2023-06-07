FROM node:20.2-alpine
# from the docker hub ->python web page

WORKDIR /app
# the/workdir/path

EXPOSE 3000

COPY package.json package-lock.json ./

RUN npm install --silent


COPY . ./

CMD [ "npm","start"]