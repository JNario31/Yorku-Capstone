import random
from flask import Flask, request,jsonify
from flask_cors import CORS
from datetime import datetime
from collections import deque
import time

app=Flask(__name__)
CORS(app)

def generate_data():
    temperature = round(random.uniform(19, 22), 2)
    return {"temp": temperature}

@app.route("/api/data", methods=["GET"])
def get_temp():
    return jsonify(generate_data()); 

if __name__ == '__main__':
    app.run(debug=True)