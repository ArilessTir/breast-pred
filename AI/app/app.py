from fastapi import FastAPI
import pickle
from pydantic import BaseModel
import pandas as pd


class Data(BaseModel):
    id: int
    name: str

app = FastAPI()

model = pickle.load(open('../model/LinearSVC.sav', 'rb'))

@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.post("/prediction")
async def prediction(data: Data):
    req =  data.json()
    data = pd.read_json(req,orient='index').transpose()
    
    print(data)

    return {
        "status" : "SUCCESS",
        "data" : req
    }
    

if __name__== "__main__":
    uvicorn.run()