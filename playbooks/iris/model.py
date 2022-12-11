import pandas as pd
import pickle

class Model:
    def __init__(self):
        self.data = pd.read_csv('data/train.csv')
        self.X = ['SepalLengthCm', 'SepalWidthCm', 'PetalWidthCm']
        self.y = ['Species']

    def train(self):
        self.model = None
        return self.model    

    def predict(self, items):
        return []

    def save(self):
        with open('model.pickle', 'wb') as f: 
            pickle.dump(self, f)