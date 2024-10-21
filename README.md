
# 🧭 **Safety Compass**  
A Smart Tool for Safer Travels  

## **NOTE:**
I couldn't find an API as per my project requirements,hence a custom JSON file (`safety_data.json`) was manually created.

As of now only a handful amount of data is stored, will keep updating it :)

## 🌟 **Features**

- **📱 Responsive Design**  
  Fully responsive dark-themed UI with smooth animations and dynamic hover effects for a professional look across devices.

## 🧩 **Key Metrics Considered**  

Safety Compass assesses the following parameters to calculate a city’s safety rating:

- **🚨 Crime Rates**: Analysis of violent crimes (e.g., assaults, homicides), property crimes (e.g., theft, burglary), and cybercrimes.  
- **👮 Law Enforcement**: Evaluates the effectiveness of law enforcement based on officer presence, response times, and community relations.  
- **🏥 Public Safety Infrastructure**: Considers the availability of emergency services and public surveillance systems.  
- **🚦 Traffic Safety**: Measures accident rates and the quality of the road infrastructure.  
- **🌍 Environmental Hazards**: Assesses natural disaster risks (e.g., earthquakes, floods) and pollution levels.  
- **💼 Socioeconomic Factors**: Examines poverty levels, unemployment rates, and income inequality in the area.  
- **🩺 Public Health**: Takes into account access to healthcare services and disease prevalence.  
- **🏘️ Community Engagement**: Looks at neighborhood safety initiatives and community safety programs.  
- **📢 Emergency Preparedness**: Evaluates the presence of disaster response plans and public safety drills.  
- **👥 Resident Perception**: Gathers insights on how safe locals feel and their trust in authorities.  
- **🧳 Tourism Safety**: Analyzes crime statistics related to tourists and safety measures in tourist areas.  
- **📱 Technological Integration**: Considers the use of tech for crime prevention (e.g., crime mapping, reporting apps).

## 🚀 **Getting Started**

To run the **Safety Compass** app locally, follow these steps:

1. **Clone the Repository**  
   ```bash
   git clone https://github.com/Sabique-Islam/safety-compass.git
   ```

2. **Navigate to the Project Directory**  
   ```bash
   cd safety-compass
   ```

3. **Install Dependencies**  
   ```bash
   pip install -r requirements.txt
   ```

4. **Run the Flask Application**  
   ```bash
   flask run
   ```

5. **Access the App**  
   Open your browser and go to `http://127.0.0.1:5000/`.

## 🌐 **Usage Instructions**

1. **Select a Country**  
   Choose a country from the dropdown menu to populate the city options.
   
2. **Select a City**  
   Pick a city from the enabled dropdown menu.
   
3. **Get the Safety Rating**  
   Click on the "Check Safety" button to retrieve the safety score and detailed insights.