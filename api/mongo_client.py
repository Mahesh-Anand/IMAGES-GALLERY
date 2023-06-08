import os 
from pymongo import MongoClient
from dotenv import load_dotenv 

load_dotenv(dotenv_path = "./.env.local")  # otherwise it cant take the .env.local files for its variable

# os takes the below items from .env.local
MONGO_URL = os.environ.get("MONGO_URL","mongo")
MONGO_USERNAME = os.environ.get("MONGO_USERNAME","root")
MONGO_PASSWORD = os.environ.get("MONGO_PASSWORD","")
MONGO_PORT = os.environ.get("MONGO_PORT",27017)

mongo_client = MongoClient(
    host = MONGO_URL,
    username = MONGO_USERNAME,
    password = MONGO_PASSWORD,
    port = MONGO_PORT
)


def insert_test_document():
    db = mongo_client.test      # test here is the db created if not present
    test_collection  = db.test_collection    # test_Colllections here is the collections name
    res = test_collection.insert_one({"name":"NEw mahi", "instructor":True})
    print(res)