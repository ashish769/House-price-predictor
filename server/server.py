from flask import Flask,request,jsonify
app = Flask(__name__)

@app.route('/hello')
def Hello():
    return "Hi"

if __name__ == "__main__":
    print("running the server")
    app.run()