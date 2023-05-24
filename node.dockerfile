
# base docker image
FROM node:16.20.0-alpine

LABEL author="jagmeet"

#ENV variables or other ENV variable like port  
# ENV NODE_VERSION  16.20.0
ENV NODE_ENV=production
ENV PORT=3000

# define directory and other build commands
WORKDIR /var/www
COPY package.json package-lock.json ./
RUN npm install

#copy code to docker directory COPY . . -> first . is for local direcory path 
# and 2nd is for docker directory path which by default is WORKDIR path
# use $<ENV_NAME> to access env variables
COPY . ./
EXPOSE $PORT

##starting server
ENTRYPOINT ["npm", "start"]

##build command 
# use -f in custom docker file name, default filename is just .dockerfile
# docker buildx build -t nodestarter:<version> -f node.dockerfile .
