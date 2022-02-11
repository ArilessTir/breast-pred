from sklearn.svm import LinearSVC
from sklearn.pipeline import Pipeline

import preprocessor


model = Pipeline(
    steps=[
        ('preprocessing', preprocessor.preprocessor),
        ('model',LinearSVC(penalty='l2', C=2))
    ]
)