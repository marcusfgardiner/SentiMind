import wheel
import pandas as pd
import nltk
import numpy
import sklearn as skl
import pickle
import re
from sklearn.naive_bayes import MultinomialNB,BernoulliNB
from nltk.classify.scikitlearn import SklearnClassifier
from sklearn.linear_model import LogisticRegression,SGDClassifier
from sklearn.svm import SVC, LinearSVC, NuSVC

df = pd.DataFrame(pd.read_csv('shuffleddata.csv', encoding='latin-1'))

sentiment_column = (df.iloc[:, [1]])
sentiment_array = sentiment_column.values


text_column = (df.iloc[:, [6]])
text_array = text_column.values

# print(text_array)

def regex_cleaner(tweet_text):
  tweet_text = re.sub("(f\*ck)", "fuck", tweet_text)
  tweet_text = re.sub("(sh\*t)", "shit", tweet_text)
  tweet_text = ' '.join(re.sub("(@[A-Za-z0-9]+)|([^0-9A-Za-z \t])|(\w+:\/\/\S+)", " ", tweet_text).split())
  return tweet_text

cleaned_array = []

for x in text_array:
    cleaned_tweet = [regex_cleaner(x[0])]
    cleaned_array.append(cleaned_tweet)

text = []

for words in cleaned_array:
    words_filtered = [e.lower() for e in words[0].split() if len(e) >= 3]
    text.append((words_filtered))

# print (text)

tweets = []
count = 0
for words in text:
    tweet = (words, sentiment_array[count][0])
    count += 1
    tweets.append(tweet)
# print(tweets)


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


word_features = get_word_features(get_words_in_tweets(tweets))

# print(word_features)


def extract_features(text):
    # this creates a unique immutable set of words from the one fed in document 'text'
    text_words = set(text)
    features = {}
    # this iterates through all unique words in the text and adds it to the features hash
    for word in word_features:
        features['contains(%s)' % word] = (word in text_words)
    return features


# print (extract_features(['love','reading','incredibly']))

full_data_set = nltk.classify.apply_features(extract_features, tweets)

# set that we'll train our classifier with
training_set = full_data_set[:400]

# set that we'll test against.
testing_set = full_data_set[400:]

# print (training_set)

classifier = nltk.NaiveBayesClassifier.train(training_set)
print("MultinomialNB accuracy percent:",nltk.classify.accuracy(classifier, testing_set))

# print (classifier.show_most_informative_features(32))

f = open('my_classifier.pickle', 'wb')
pickle.dump(classifier, f)
f.close()


# ------------------ ------------------ ------------------ ------------------ ------------------ ------------------

# Other models
#
# print("Original Naive Bayes Algo accuracy percent:", (nltk.classify.accuracy(classifier, testing_set))*100)
# classifier.show_most_informative_features(15)
#
# MNB_classifier = SklearnClassifier(MultinomialNB())
# MNB_classifier.train(training_set)
# print("MultinomialNB accuracy percent:",nltk.classify.accuracy(MNB_classifier, testing_set))
#
# BNB_classifier = SklearnClassifier(BernoulliNB())
# BNB_classifier.train(training_set)
# print("BernoulliNB accuracy percent:",nltk.classify.accuracy(BNB_classifier, testing_set))
#
# LogisticRegression_classifier = SklearnClassifier(LogisticRegression())
# LogisticRegression_classifier.train(training_set)
# print("LogisticRegression_classifier accuracy percent:", (nltk.classify.accuracy(LogisticRegression_classifier, testing_set))*100)
#
# SGDClassifier_classifier = SklearnClassifier(SGDClassifier())
# SGDClassifier_classifier.train(training_set)
# print("SGDClassifier_classifier accuracy percent:", (nltk.classify.accuracy(SGDClassifier_classifier, testing_set))*100)
#
# SVC_classifier = SklearnClassifier(SVC())
# SVC_classifier.train(training_set)
# print("SVC_classifier accuracy percent:", (nltk.classify.accuracy(SVC_classifier, testing_set))*100)
#
# LinearSVC_classifier = SklearnClassifier(LinearSVC())
# LinearSVC_classifier.train(training_set)
# print("LinearSVC_classifier accuracy percent:", (nltk.classify.accuracy(LinearSVC_classifier, testing_set))*100)
#
# NuSVC_classifier = SklearnClassifier(NuSVC())
# NuSVC_classifier.train(training_set)
# print("NuSVC_classifier accuracy percent:", (nltk.classify.accuracy(NuSVC_classifier, testing_set))*100)
