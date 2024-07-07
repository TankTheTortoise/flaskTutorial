from app import app
from flask import render_template


@app.route("/")
def home():
    return render_template("public/index.html")

@app.route("/about")
def about():
    return "About"

