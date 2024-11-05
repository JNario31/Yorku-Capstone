import random
from flask import Flask, request,jsonify
from flask_cors import CORS
from datetime import datetime
from collections import deque
import time

app=Flask(__name__)
CORS(app)

DATA_QUEUE_SIZE = 30
data_queue=deque(maxlen=DATA_QUEUE_SIZE)

def generate_data():
    time.sleep(1)
    temperature = round(random.uniform(23, 25), 2)
    timestamp = datetime.now().strftime("%H:%M:%S")
    return {"date": timestamp, "temperature": temperature}

@app.route("/api/data", methods=["GET"])
def get_temp():
    data_queue.append(generate_data())
    return jsonify(list(data_queue)); 

if __name__ == '__main__':
    app.run(debug=True)