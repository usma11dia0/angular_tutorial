FROM node:18.10.0
WORKDIR /projects
RUN apt update && apt install -y \
    sudo \
    vim
RUN npm install -g @angular/cli
EXPOSE 4200