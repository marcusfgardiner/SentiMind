# base image
FROM node:8.9.4

# add `/usr/src/app/node_modules/.bin` to $PATH.
# This prevents node modules being saved in container and loading up docker
ENV NODE_PATH=/node_modules
ENV PATH=$PATH:/node_modules/.bin

# install and cache app dependencies
WORKDIR /app
COPY . /app
RUN npm install
RUN npm install react-scripts@1.1.1 -g

# Install any needed packages specified in requirements.txt
# RUN npm install -r requirements.txt

# replace this with your application's default port
EXPOSE 3000

# start app
CMD ["npm", "start"]
