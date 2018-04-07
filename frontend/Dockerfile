# base image
FROM node:8.9.4

# set working directory
RUN mkdir /usr/src/app
WORKDIR /usr/src/app

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /usr/src/app/package.json
RUN npm install
RUN npm install react-scripts@1.1.1 -g
COPY .

# Install any needed packages specified in requirements.txt
# RUN npm install -r requirements.txt

# replace this with your application's default port
EXPOSE 8888

# start app
CMD ["npm", "start"]
