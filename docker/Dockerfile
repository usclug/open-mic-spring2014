# DOCKER VERSION 0.10.0

FROM ubuntu:14.04
MAINTAINER Sheldon Kwok <sheldon@secondspectrum.com>

RUN apt-get update
RUN apt-get install -y software-properties-common # We need the add-apt-repository command
RUN add-apt-repository -y ppa:chris-lea/node.js # Add ppa
RUN echo "deb http://us.archive.ubuntu.com/ubuntu/ precise universe" >> /etc/apt/sources.list # Add to sources list
RUN apt-get update
RUN apt-get install -y nodejs # Install nodejs

ADD . /src

RUN cd /src/app; npm install

EXPOSE 8000
CMD ["node", "/src/app/index.js"]
