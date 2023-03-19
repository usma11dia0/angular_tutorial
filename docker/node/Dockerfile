FROM node:18.10.0
RUN apt update && apt install -y \
    sudo \
    vim
WORKDIR /projects
ENV PATH /usr/local/bin:$PATH

COPY ./angular-todo/package*.json ./
RUN npm install -g @angular/cli
RUN npm install
EXPOSE 4200