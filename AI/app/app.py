from fastapi import FastAPI
import pickle
from pydantic import BaseModel
import pandas as pd


class Data(BaseModel):
    id: int
    radius_mean: float
    texture_mean: float
    perimeter_mean: float
    area_mean: float
    smoothness_mean: float
    compactness_mean: float
    concavity_mean: float
    concave_points_mean: float
    symmetry_mean: float
    fractal_dimension_mean: float
    radius_se: float
    texture_se: float
    perimeter_se: float
    area_se: float
    smoothness_se: float
    compactness_se: float
    concavity_se: float
    concave_points_se: float
    symmetry_se: float
    fractal_dimension_se: float
    radius_worst: float
    texture_worst: float
    perimeter_worst: float
    area_worst: float
    smoothness_worst: float
    compactness_worst: float
    concavity_worst: float
    concave_points_worst: float
    symmetry_worst: float
    fractal_dimension_worst: float

app = FastAPI()

model = pickle.load(open('../model/LinearSVC.sav', 'rb'))

@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.post("/prediction")
async def prediction(data: Data):
    req =  data.json()
    data = pd.read_json(req,orient='index').transpose()
    data.rename(columns= {'concave_points_mean':'concave points_mean',
    'concave_points_se':'concave points_se',
    'concave_points_worst':'concave points_worst'}, inplace=True)
    pred = model.predict(data)
    pred = 'B' if str(pred[0]) == "0" else 'M'
    print(pred)
    return {
        "status" : "SUCCESS",
        "data" : str(pred)
    }
    

if __name__== "__main__":
    uvicorn.run()
