from flask import Flask, jsonify
from flask import render_template


app = Flask(__name__)


@app.route("/random")
def main():
    return render_template('dogTemplate.html')

@app.route("/race")
def select():
    return render_template('dogRace.html')

if __name__ == "__main__":
    app.run(debug=True, port= 4000)

