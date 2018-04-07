# Use an official Python runtime as a parent image
FROM ubuntu:latest
RUN apt-get update -y
RUN apt-get install -y python3-pip python3-dev build-essential

RUN python3 -m pip install pip --upgrade

# Copy the current directory contents into the container at /app
COPY . /server

# Set the working directory to /server
WORKDIR /server


# Install any needed packages specified in requirements.txt
RUN pip install --trusted-host pypi.python.org -r requirements.txt

# Make port 5000 available to the world outside this container
EXPOSE 5000

# Run server.py when the container launches
CMD ["/usr/bin/python3", "server.py"]
