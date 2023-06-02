# save this as app.py
from flask import Flask


app = Flask(__name__)

@app.route("/hi")
def hello():
    return "Hello, World!"

# or
# app.route("/")(hello)# telling app to get hello funtion in this file to be executed
# from flask import Flask

# app = Flask(__name__)

# @app.route("/")
# def hello():
#     return "Hello, World!"

# @app.route("/about")
# def about():
#     return "This is the About page."

# if __name__ == "__main__":
#     app.run()
