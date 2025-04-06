from flask import Flask,request,jsonify
import util
from flask_cors import CORS
app = Flask(__name__)
CORS(app)
util.load_saved_artifacts()
@app.route('/loc')
def get_locations_names():
   location=jsonify({
       'locations':util. get_locations_names()
   }) 
   return location
@app.route('/price',methods=['POST'])
def predict_home_price():
    total_sqft=float(request.form['total_sqft'])
    location=request.form['location']
    bhk=int(request.form['bhk'])
    bath=int(request.form['bath'])

    response=jsonify({
        'estimated_price':util.get_estimated_price(location,total_sqft,bhk,bath)
    })

    return response

if __name__ == "__main__":
    print("running the server")
    app.run()