from os import initgroups
from statistics import mode
from click import prompt
from importlib_metadata import version
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import LabelEncoder

import pandas as pd
import pickle

from pipeline import model
import Config

data = pd.read_csv(f'{Config.DATA_PATH}')

X = data.drop(['id','diagnosis'],axis=1)
y = pd.Series(LabelEncoder().fit_transform(data['diagnosis']))

X_train, X_test, y_train, y_test = train_test_split(X,y, test_size=0.2, random_state=400)


model = model.fit(X_train, y_train)

s_training = model.score(X_train,y_train)
s_test = model.score(X_test,y_test)

print(f'Voulez vous sauvegarder ce modele \nS_training : {s_training}\nS_test : {s_test}\n')
answer = input('O/N? :')

if answer == 'O' or answer == "o":
    q1 = input("s'agit il d'un nouveau model\nO/N ?: ")
    if q1 == 'O' or q1 == 'o':
        name = input('Nom du modele:')
        model_save = f'model/{name}.sav'
        pickle.dump(model, open(model_save, 'wb'))
        print('model enregistré')
    else:
        model_save = f'model/LinearSVC.sav'
        pickle.dump(model, open(model_save, 'wb'))
        print('model enregistré')


loaded_model = pickle.load(open(model_save, 'rb'))
result = loaded_model.score(X_test, y_test)
print(result)