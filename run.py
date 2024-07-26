import os
from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/")
def booking():
    return render_template("booking.html")

@app.route("/")
def careers():
    return render_template("careers.html")

@app.route("/")
def menu():
    return render_template("menu.html")

@app.route("/")
def news():
    return render_template("news.html")

@app.route("/")
def opening():
    return render_template("opening.html")


if __name__ == "__main__":
    app.run(
        host=os.environ.get("IP", "0.0.0.0"),
        port=int(os.environ.get("PORT", "5000")),
        debug=True 
        #remove on file deployment 
        # #change to false before submission
    )

