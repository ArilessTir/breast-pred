FROM node:16.14-alpine as dist

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . ./


RUN npm run-script build

FROM nginx:1.19

COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=dist app/dist /usr/share/nginx/html