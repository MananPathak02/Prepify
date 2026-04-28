from flask import Flask, render_template, request, redirect, url_for, jsonify
from flask_cors import CORS
from pymongo import MongoClient
from config import Config
from flask import session
import bcrypt
from datetime import datetime


app = Flask(__name__)
app.config.from_object(Config)
# FORCE SET SECRET KEY (critical)
if not app.config["SECRET_KEY"]:
    raise RuntimeError("SECRET_KEY not set. Check your .env file.")
app.secret_key = app.config["SECRET_KEY"]
CORS(app)


client = MongoClient(app.config["MONGO_URI"])
db = client.get_default_database()
users_collection = db.users
print("CONNECTED DATABASE:", db.name)


# Landing Page
@app.route("/")
def landing():
    return render_template("index.html")

@app.route("/force-create-db")
def force_create_db():
    result = db["users"].insert_one({
        "force": True,
        "created_at": datetime.utcnow()
    })
    return f"FORCED INSERT ID: {result.inserted_id}"
@app.route("/seed-coding-questions")
def seed_coding_questions():
    questions = [
        {
            "title": "Reverse a String",
            "problem": "Write a function that reverses a given string.",
            "input_format": "A string s",
            "output_format": "Reversed string",
            "constraints": "1 ≤ len(s) ≤ 10^5",
            "example": {
                "input": "hello",
                "output": "olleh"
            },
            "difficulty": "easy",
            "topic": "Strings",
            "language": ["Python", "C++", "Java"]
        },
        {
            "title": "Check Palindrome",
            "problem": "Check whether a given string is a palindrome.",
            "input_format": "A string s",
            "output_format": "YES or NO",
            "constraints": "1 ≤ len(s) ≤ 10^5",
            "example": {
                "input": "madam",
                "output": "YES"
            },
            "difficulty": "easy",
            "topic": "Strings",
            "language": ["Python", "C++", "Java"]
        },
        {
            "title": "Find Maximum Element in Array",
            "problem": "Given an array of integers, find the maximum element.",
            "input_format": "First line N, second line N integers",
            "output_format": "Maximum element",
            "constraints": "1 ≤ N ≤ 10^5",
            "example": {
                "input": "5\n1 3 2 9 4",
                "output": "9"
            },
            "difficulty": "easy",
            "topic": "Arrays",
            "language": ["Python", "C++", "Java"]
        },
        {
            "title": "Two Sum",
            "problem": "Given an array and a target value, find two indices such that their sum equals the target.",
            "input_format": "Array of integers and target",
            "output_format": "Indices of two numbers",
            "constraints": "2 ≤ N ≤ 10^5",
            "example": {
                "input": "nums = [2,7,11,15], target = 9",
                "output": "[0,1]"
            },
            "difficulty": "medium",
            "topic": "Arrays",
            "language": ["Python", "C++", "Java"]
        }
    ]

    db.coding_questions.insert_many(questions)
    return "✅ Coding questions inserted successfully"

# Register
@app.route("/register", methods=["GET", "POST"])
def register():
    if request.method == "POST":
        name = request.form.get("name")
        email = request.form.get("email")
        password = request.form.get("password")

        # Check if user already exists
        if users_collection.find_one({"email": email}):
            return "User already exists", 400

        hashed_pw = bcrypt.hashpw(password.encode("utf-8"), bcrypt.gensalt())

        users_collection.insert_one({
            "name": name,
            "email": email,
            "password": hashed_pw,
            "created_at": datetime.utcnow()
        })

        # Start session
        session["user_email"] = email

        return redirect(url_for("dashboard"))

    return render_template("register.html")

# Login
@app.route("/login", methods=["GET", "POST"])
def login():
    if request.method == "POST":
        email = request.form.get("email")
        password = request.form.get("password")

        user = users_collection.find_one({"email": email})
        if not user:
            return "Invalid credentials", 401

        if not bcrypt.checkpw(password.encode("utf-8"), user["password"]):
            return "Invalid credentials", 401

        session["user_email"] = email
        return redirect(url_for("dashboard"))

    return render_template("login.html")


# Dashboard
@app.route("/dashboard")
def dashboard():
    if "user_email" not in session:
        return redirect(url_for("login"))

    user = users_collection.find_one(
        {"email": session["user_email"]},
        {"_id": 0, "password": 0}
    )

    coding_questions = list(
        db.coding_questions.find({}, {"_id": 0})
    )

    # ✅ FETCH INTERVIEWS (PUBLIC DATA)
    interviews = list(
        db.interviews.find({}, {"_id": 0})
    )

    companies = list(
        db.companies.find({}, {"_id": 0})
    )

    return render_template(
        "dash1.html",
        user=user,
        coding_questions=coding_questions,
        interviews=interviews,
        companies=companies   # ✅ NEW
    )

# Logout
@app.route("/logout")
def logout():
    session.clear()
    return redirect(url_for("landing"))


# ---------------------------
# Run App
# ---------------------------
if __name__ == "__main__":
    app.run(debug=True)
