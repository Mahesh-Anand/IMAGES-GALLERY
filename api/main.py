# save this as app.py
import os
import requests
from flask import Flask, request, jsonify
from dotenv import load_dotenv 
from flask_cors import CORS
from collections.abc import Mapping, MutableMapping
from mongo_client import mongo_client   # instance which contains ports user etc

gallery = mongo_client.gallery      # test here is the gallery db created if not present
images_collection  = gallery.images     # images  here is the collections name


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



@app.route("/images", methods = ["GET","POST"])
def images():
    if request.method == "GET": # request.method to know which request was sent by client
        # we read images from database
        images = images_collection.find()
        return jsonify([img for img in images])
        #the above will convert the images values as list values
    if request.method == "POST":
        # we need to save data in database
        image = request.get_json() # to convert the request string to json object
        image["_id"] = image.get("id") # setting _id values as our id from upsplash instead of mongodb id
        result = images_collection.insert_one(image) 
        inserted_id = result.inserted_id
        return {"inserted_id":inserted_id}#jsonify() #so our inserted id i the db will have this as id
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