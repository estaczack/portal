#!/bin/bash

# docker run -d --name mongodb --restart unless-stopped -p 27017:27017 mongo:latest

docker run -d --name mongodb --restart unless-stopped -v /home/eddealmeida/data:/data/db mongo:latest

exit 0

