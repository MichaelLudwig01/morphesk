from fastapi import FastAPI, Header, Request
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from enum import Enum
import json

app = FastAPI()

class TextSection(BaseModel):
    array:str
    content:str

origins = [
    "http://localhost:4200",
    "http://ludwig-michael22:80"
    "http://ludwig-michael22"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

def readJson(array):
    with open('text.json', 'r') as file:
        data = json.load(file)
        return data[array]

def writeToJson(array, content):
    with open('text.json', 'r+') as file:
        data = json.load(file)
        data[array] = content
        file.seek(0)  # Gehe an den Anfang der Datei
        file.write(json.dumps(data))
        file.truncate()  # Kürze die Datei auf die aktuelle Position
        return data


@app.get("/")
async def index():
    return {"message": "Hallo Welt!"}

@app.get("/getText/{array}")
async def getText(array: str):
    res = readJson(array)
    return res

@app.post("/updateText/")
async def updateText(body: TextSection):
    array = body.array
    content = body.content
    res = writeToJson(array, content)
    return res