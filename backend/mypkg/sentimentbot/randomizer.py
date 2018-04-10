import pandas as pd

df = pd.read_csv('training.csv', header=None, encoding='latin-1')

ds = df.sample(frac=1)
ds.to_csv('output.csv')
