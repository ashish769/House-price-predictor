# 🏡 House Price Predictor

A responsive web application that estimates house prices based on user inputs such as area, number of bedrooms (BHK), bathrooms, and location using a machine learning model served via a Flask backend.

---

## 🚀 Demo

![Screenshot 2025-04-22 162506](https://github.com/user-attachments/assets/2457ca95-5e26-41e8-988f-1014a10692f8)

---

## 📌 Features

- Predict house prices in real-time based on:
  - Area (in sq. ft)
  - Number of bedrooms (BHK)
  - Number of bathrooms
  - Location (dynamically fetched from backend)
- Intuitive and responsive frontend UI
- Dynamic dropdown for locations from the backend
- Simulated price calculation ( model-based )

---

## 🛠️ Tech Stack

| Frontend | Backend | Machine Learning | Others |
|----------|---------|------------------|--------|
| HTML5, CSS3, JavaScript, jQuery | Flask | scikit-learn / Pickled model | jQuery, Python 3.10, REST API |

---
## 📁 Project Structure

house-price-predictor/ ├── static/ │ └── app.css ├── templates/ │ └── app.html ├── app.py ├── app.js ├── model/ │ └── model.pkl ├── requirements.txt └── README.md

yaml
Copy
Edit

---

## ⚙️ Installation

1. **Clone the repo**
```bash
git clone https://github.com/your-username/house-price-predictor.git
cd house-price-predictor
Create & activate virtual environment

bash
Copy
Edit
python3.10 -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
Install dependencies

bash
Copy
Edit
pip install -r requirements.txt
Run the Flask app

bash
Copy
Edit
python app.py
Open in browser

bash
Copy
Edit
http://127.0.0.1:5000
🔌 API Endpoints

Method	Endpoint	Description
GET	/loc	Returns JSON list of available locations
POST	/predict	Accepts house features and returns predicted price
📦 Example Payload (/predict)
json
Copy
Edit
{
  "area": 1200,
  "bhk": 3,
  "bathroom": 2,
  "location": "Baneshwor"
}
🧠 ML Model (Optional Explanation)
The model is trained on housing price data using Linear Regression / RandomForestRegressor. The model is serialized using joblib or pickle and served via Flask API.

📌 Future Enhancements
Use real trained model instead of simulated logic

Store and visualize prediction history

Add authentication for user-specific dashboards

Integrate with a real database

Deploy to cloud (Heroku / AWS / Render)

🙋‍♂️ Author
Ashish Raj Poudel
📧 ashish.raj@example.com
🌐 Portfolio | 🐦 Twitter | 💼 LinkedIn

📜 License
This project is licensed under the MIT License.

markdown
Copy
Edit

Let me know if you want a version with:
- A working download link for the `.pkl` model
- Deployment instructions for **Heroku / Render**
- More technical details about the ML training process

I'll gladly tailor it further!






You said:
in a single code of all the above


ChatGPT said:
Sure! Here's the entire README.md file for your House Price Predictor project written as a single markdown code block, ready to copy and paste:

markdown
Copy
Edit
# 🏡 House Price Predictor

A responsive web application that estimates house prices based on user inputs such as area, number of bedrooms (BHK), bathrooms, and location using a machine learning model served via a Flask backend.

---

## 🚀 Demo

![House Price Predictor UI](https://your-screenshot-link.com/demo.png)

🔗 **Live Demo**: [View Demo](https://your-live-demo-link.com)  
📽️ **Video Walkthrough**: [Watch Here](https://your-video-link.com)

---

## 📌 Features

- Predict house prices in real-time based on:
  - Area (in sq. ft)
  - Number of bedrooms (BHK)
  - Number of bathrooms
  - Location (dynamically fetched from backend)
- Responsive frontend UI built with HTML/CSS/JS
- Real-time price estimation
- Simple and elegant design
- Dynamic dropdowns populated from Flask API

---

## 🛠️ Tech Stack

| Frontend | Backend | Machine Learning | Others |
|----------|---------|------------------|--------|
| HTML5, CSS3, JavaScript, jQuery | Flask | scikit-learn / Pickled model | jQuery, Python 3.10, REST API |

---



---

## ⚙️ Installation

1. **Clone the repository**
```bash
git clone https://github.com/your-username/house-price-predictor.git
cd house-price-predictor
Create and activate a virtual environment


python3.10 -m venv venv
source venv/bin/activate  # On Windows use `venv\Scripts\activate`
Install dependencies


pip install -r requirements.txt
Run the Flask app


python app.py
Open your browser at


http://127.0.0.1:5000




