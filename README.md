# SentiMind

[Daniel Keen](https://github.com/DKeen0123) || [Marcus Gardiner](https://github.com/marcusfgardiner) || [Carlos Trapet](https://github.com/CarlosTrapet) || [Stephen Tilley](https://github.com/stilley85)

A twitter sentiment analysis web app based on a hashtag (using machine learning to assess sentiment)

# Warning

## Local host currently hardcoded in /hello route
## Deployment: can we deploy in one server and remove CORS from production enviornment?

## Tech Stack



## How To Use

In the terminal:

1. `git clone https://github.com/marcusfgardiner/SentiMind.git`
2. From the route of the directory `cd fullstack_template/static`
3. npm install

In order to run the server, you will need to [download python](https://www.python.org/downloads/) and then run: `pip3 install pipenv`

once pipenv is installed, run `pipenv install requests` to download the dependencies.

to run the server:

1. `cd fullstack_template/server`
2. `python3 server.py`

## Tests

for Testing our ReactJS front end we used Jest with enzyme. To run the tests:

1. `cd fullstack_template/static`
2. `npm run test`
To run python tests:
1. Ensure you have run 'pipenv install requests' and 'npm install' as above to download dependencies
2. 'pipenv shell' to set up the python environment
3. 'nosetests' to run tests

## Challenges

* Sticking to the single responsibility principle while designing the GET request -method using Tweepy
* Hard coding the word "sad" into the query for test purposes and then forget we did it, causing a minor breakdown and assuming "Twitter is just a really depressing place"