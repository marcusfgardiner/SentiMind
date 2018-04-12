import wheel
import pandas as pd
import nltk
import numpy
import sklearn as skl
import pickle

f = open('./mypkg/bananoulli_20k.pickle', 'rb')
classifier = pickle.load(f)
f.close

df = pd.DataFrame(pd.read_csv('./mypkg/testingdataset.csv'))


sentiment_column = (df.iloc[:, [1]])
sentiment_array = sentiment_column.values


text_column = (df.iloc[:, [6]])
text_array = text_column.values

text = []

for words in text_array:
    words_filtered = [e.lower() for e in words[0].split() if len(e) >= 3]
    text.append((words_filtered))

testing_tweets = []
count = 0
for words in text:
    tweet = (words, sentiment_array[count][0])
    count += 1
    testing_tweets.append(tweet)


def get_words_in_tweets(tweets):
    all_words = []
    for (words, sentiment) in tweets:
        all_words.extend(words)
    return all_words
# print (get_words_in_tweets(tweets))


def get_word_features(wordlist):
    wordlist = nltk.FreqDist(wordlist)
    word_features = wordlist.keys()
    return word_features

word_features = get_word_features(get_words_in_tweets(testing_tweets))

# print(word_features)

def extract_features(text):
    # this creates a unique immutable set of words from the one fed in document 'text'
    text_words = set(text)
    features = {}
    # this iterates through all unique words in the text and adds it to the features hash
    for word in word_features:
        features['contains(%s)' % word] = (word in text_words)
    return features

def process_tweet_for_classification(tweet):
    return extract_features(tweet.split())

# ----------------------------------------------------------------------
# Final classification methods
# ----------------------------------------------------------------------

def classify_tweet(tweet):
    processed_tweet = process_tweet_for_classification(tweet)
    return classifier.classify(processed_tweet)

def probability_positive(tweet):
    processed_tweet = process_tweet_for_classification(tweet)
    dist = classifier.prob_classify(processed_tweet)
    for label in dist.samples():
        if label == 4:
            return (((dist.prob(label))*2)-1)

# ----------------------------------------------------------------------
# Testing the ML model
# ----------------------------------------------------------------------

# test_tweet = 'lovely happy beautiful joy'
#
# print(classify_tweet(test_tweet))
#
# print(probability_positive(test_tweet))
#
# # ----------------------------------------------------------------------
# # Accuracy of the ML model
# # ----------------------------------------------------------------------
#
# testing_set = nltk.classify.apply_features(extract_features, testing_tweets)
#
# print("MultinomialNB accuracy percent:", nltk.classify.accuracy(classifier, testing_set))
