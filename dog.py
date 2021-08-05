from flask import Flask, jsonify
from flask import render_template
import requests
import simplejson 
import json


app = Flask(__name__)


@app.route("/varUse")
def testVar():
    uri = "https://dog.ceo/api/breeds/image/random"
    uResponse = requests.get(uri)
    Jresponse = uResponse.text
    data = json.loads(Jresponse)
    return render_template('dogTemplate.html', x=data)


if __name__ == "__main__":
    app.run(debug=True, port= 4000)

