import wheel
import pandas as pd
import nltk
import numpy
import sklearn as skl
import pickle


df = pd.DataFrame(pd.read_csv('shuffleddata.csv', encoding='latin-1'))


sentiment_column = (df.iloc[:, [1]])
sentiment_array = sentiment_column.values


text_column = (df.iloc[:, [6]])
text_array = text_column.values

text = []

for words in text_array:
    words_filtered = [e.lower() for e in words[0].split() if len(e) >= 3]
    text.append((words_filtered))

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

training_set = nltk.classify.apply_features(extract_features, tweets)

# print (training_set)

classifier = nltk.NaiveBayesClassifier.train(training_set)

# print (classifier.show_most_informative_features(32))

test_tweet = 'jquery museum'

print (classifier.classify(extract_features(test_tweet.split())))

f = open('my_classifier.pickle', 'wb')
pickle.dump(classifier, f)
f.close()
