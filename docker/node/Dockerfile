FROM node:18.10.0
WORKDIR /projects
RUN apt update && apt install -y \
    sudo \
    vim
COPY ./angular-todo/package*.json ./
RUN npm install
EXPOSE 4200