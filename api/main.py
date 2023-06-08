# save this as app.py
import os
import requests
from flask import Flask, request
from dotenv import load_dotenv 
from flask_cors import CORS
from collections.abc import Mapping, MutableMapping
from mongo_client import insert_test_document


load_dotenv(dotenv_path = "./.env.local") # to load unsplash key from given path
# print(os.environ.get("UNSPLASH_KEY",""))   # other way to get unsplash key

UNSPLASH_URL = "https://api.unsplash.com/photos/random"
UNSPLASH_KEY = os.environ.get("UNSPLASH_KEY","")#"z6ujHCKqrDm7bJRdsG4pAXBagPQk5TXewDW17llj-HI"
DEBUG = bool(os.environ.get("DEBUG","True")) # if there is debug in env then choose that otherwise True


if not UNSPLASH_KEY:    # or UNSPLASH KEY==""
    raise EnvironmentError("Please create .env.local file and type unsplash key")


app = Flask(__name__)

CORS(app)

app.config["DEBUG"]= DEBUG


insert_test_document()

@app.route("/new-image")
def new_image():
    word  = request.args.get("query")
    headers = {
        "Accept-Version": "v1",
        "Authorization":"Client-ID "+ UNSPLASH_KEY
    }
    params = {
        "query":word
    }
    # response= requests.get(url = UNSPLASH_URL, headers=headers, params = params) #beacuse it is a company lap it wont work
    response = requests.get(url=UNSPLASH_URL, headers=headers, params=params, verify=False)

    # print(response)
    # print(response.text)
    data = response.json()
    # return {"data": data} #json returns dict
    return data



@app.route("/")
def hello():
    return "Hello, World!"

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5050)
"""

# or
# app.route("/")(hello)# telling app to get hello funtion in this file to be executed
from flask import Flask

app = Flask(__name__)

@app.route("/")
def hello():
    return "Hello, World!"

@app.route("/about")
def about():
    return "This is the About page."

if __name__ == "__main__":
    app.run()
"""