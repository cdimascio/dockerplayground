FROM registry.ng.bluemix.net/ibmnode:latest

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY . /usr/src/app
RUN npm install

EXPOSE 8081

CMD [ "npm", "start"]
