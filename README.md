# SentiMind

[Daniel Keen](https://github.com/DKeen0123) || [Marcus Gardiner](https://github.com/marcusfgardiner) || [Carlos Trapet](https://github.com/CarlosTrapet) || [Stephen Tilley](https://github.com/stilley85)

A twitter sentiment analysis web app based on a hashtag (using machine learning to assess sentiment)

You can find out what the world thinks about a topic of your choice on [sentimind.co.uk](http://sentimind.co.uk/).
Or just check the world's general sentiment on kittens and rainbows.

# Warning

### Local host currently hardcoded in /hello route
### Deployment: can we deploy in one server and remove CORS from production enviornment?

## Tech Stack

#### Backend/Frontend
* Python/Flask
* React

#### Testing
* Jest/Enzyme
* Pytest

#### Deployment
* Docker
* AWS

#### Libraries
* Tweepy -- to make calls to the Twitter API
* NLTK -- a toolkit used for Natural Language Processing

## How to run locally

In order to run the server, you will need to [download python](https://www.python.org/downloads/) and then run: `pip3 install pipenv`

In the terminal:

1. clone the repository
2. From the root folder of the directory `pipenv install requests` to download the python dependencies
3. `pipenv shell`
4. `cd frontend`
5. `npm install` to download the react/npm dependencies

To run the backend server:

1. `cd backend`
2. `python3 server.py`

To run the frontend server:

1. `cd frontend`
2. `npm start`

## Tests

### For testing our ReactJS frontend we used Jest with enzyme. To run the tests:

1. Ensure you have run `npm install` to download dependencies
2. `cd frontend`
3. `npm test`

### For testing our Python backend we used Pytest. To run the tests:

1. Ensure you have run `pipenv install requests` to download dependencies
2. `pipenv shell` to set up the python environment
3. `cd backend/tests`
4. `nosetests` to run tests

## Challenges

* Sticking to the single responsibility principle while designing the GET request -method using Tweepy
* Hard coding the word "sad" into the query for test purposes and then forget we did it, causing a minor breakdown and assuming "Twitter is just a really depressing place"

## Future Features (aka. to be added in order of priority)

The fact that we followed Agile methodologies since the get-go and decided on MVP v1, v2 and v3 at the very start of the project made sure that our app is easily extendable and scalable. 
Adding features like the ones explained below is therefore easily achievable without having to modify the codebase too much.

* Refactoring: clean-up the backend code to optimise the way the different methods (polarity checker, top tweets, top words, etc.) are looping through the tweets.

* "History of sentiment":
Sentiment search linked to time. User can search for the positivity perception now vs. an earlier period of time.

* Search by users: hero or troll? General sentiment on Twitter-users where the SentiMind user can see what the Twitterverse thinks about someone.

* Responsive web design: considering the time put into UI, UX and deploying our product, we would like to improve SentiMind's user interface plasticity, as well as the overall user experience, eg. by including flexible grids and images.

* Search history: add database & login functionality so that users can have a list of previously searched keywords.

#### Improve bot accuracy

One of the most impactful learnings we had this week was finding out that using Machine Learning to train a bot can take a day or a year; accuracy can always be improved. 

Due to time constraints and the fact that we wanted to have a usable product by the end of the week, the dataset that we trained the bot with was limited to 20,000 tweets. Some examples on how to improve bot-accuracy:

* Use NLTK to add a list of adverbs and adjectives that modify the proceeding noun phrases' polarity

* Add context-based analysis

* Add smiley/emoji -based analysis

* Add arrays of easily identifiable positive/negative noun phrases that weigh the polarity of the sentence

* Add sarcasm detection via emoji and sarcastic noun-phrase identification
