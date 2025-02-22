# main.py

from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware 
from pydantic import BaseModel

import os
import mariadb

from datetime import datetime

from dotenv import dotenv_values

app = FastAPI()

# load .env found in this directory
config = dotenv_values(f"{os.getcwd()}/.env")

# There is a way to do this with regex...
# might be less annoying to just allow all origins
origin = [
        "http://localhost:*",
        "http://0.0.0.0:*",
        "http://127.0.0.1:*",
]

app.add_middleware(
        CORSMiddleware,
        # allow_origin_regex=origin,
        allow_origins=['*'],
        allow_methods=['GET', 'POST'],
        allow_headers=['*']
)

count = 0

class Form(BaseModel):
    fname: str
    lname: str
    email: str
    sid: str
    year: int
    event: list[str]

@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.post("/submit/")
def submitForm(form: Form, requests: Request):
    # conn = connectToMariaDb()
    # if connection error, simply return the error
    # NOTE we do not actually return the connection error with
    # mariadb. Probably a bad security thing goin on there
    # if (conn.ERROR):
    #     return conn.ERROR

    print(requests.client, end=" ")
    file = open(f"{os.getcwd()}/{config["OUTPUT_FILE_NAME"]}", "a+")
    file.write(f"{str(requests.client)}, ")
    file.write(datetime.now().strftime("%m/%d/%Y, %H:%M.%S, "))
    global count
    for k,v in form.model_dump().items():
        if (k in "event"):
            file.write(str(v))
            print(str(v))
        elif (k in "sid"):
            file.write(str(v))
            print(f"{sid[0:2]}****")
        else:
            file.write(f"{str(v)}, ")
            print(f"{str(v)}, ", end="")
    file.write("\n")
    
    count = count + 1

@app.get("/howmany/")
def getHowManySubmissions():
    print(count)
    return { "total_submissions": count }

# holding off on this.. probably just going to place everything
# in a plain text file for simplicity sake. 
'''
def connectToMariaDb():
    # this may cause an error lol
    try:
        conn = mariadb.connect(
                user=config["USER"],
                database=config["DATABASE"],
                password=config["DATABASE_PASSWORD"],
                port=config["PORT"],
                host=config["HOST"]
                )
    except mariadb.Error as e:
        print(f"Error connected to mariadb: {e}")
        return {"ERROR": "Unable to connect to mariadb"} 
    return conn
'''
    
                
