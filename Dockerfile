FROM node:16-alpine as build-stage
 

COPY . /src
WORKDIR /src
COPY ./package* ./
RUN npm install
RUN npm run build

FROM nginx:latest
RUN rm -rf /usr/share/nginx/html
RUN mkdir /usr/share/nginx/html
COPY --from=build-stage /src/build/ /usr/share/nginx/html/
COPY default.conf /etc/nginx/conf.d/

EXPOSE 80
