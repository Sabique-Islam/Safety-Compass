from flask import Flask, render_template, jsonify
import json
import os

app = Flask(__name__)

with open('data.json', 'r') as f:
    data = json.load(f)

with open('safety_data.json', 'r') as f:
    safety_data = json.load(f)
    #print("Loaded safety data:", safety_data)

@app.route('/')

def index():
    countries_sorted = sorted(data.keys())
    return render_template('index.html', countries=countries_sorted)

@app.route('/get_cities/<country_name>')

def get_cities(country_name):
    cities = data.get(country_name, [])
    cities_sorted = sorted(cities)
    return jsonify(cities_sorted)

@app.route('/get_safety_rating/<country_name>/<city_name>')
def get_safety_rating(country_name, city_name):
    city_data = safety_data.get(country_name, {}).get(city_name, None)
    
    if city_data:
        total_score = sum(city_data.values())
        safety_rating = total_score / len(city_data) 
        return jsonify({"safety_rating": safety_rating})
    else:
        return jsonify({"error": "City not found"}), 404

if __name__ == '__main__':
    app.run(debug=True, host="0.0.0.0", port=int(os.environ.get("PORT", 5000)))