import React from "react"

function About() {
    return (
      <div className="max-w-3xl mx-auto px-4 py-8 mt">
        <h1 className="text-3xl font-bold mb-4 text-center">Smart Fish Farming Monitoring</h1>
        <div className="bg-blue-100 p-6 rounded shadow-md w-200 h-70">
        <p className="mb-4 text-gray-700 leading-relaxed">
          Welcome to <span className="font-semibold text-blue-600">Acquafarm</span>! We're here to transform fish 
          farming in Rwanda through smart technology. Our platform combines IoT and AI to help you monitor fish 
          health, water conditions, and optimize your production effortlessly.
        </p>
        <p className="mb-4 text-gray-700 leading-relaxed">
          We believe in empowering local farmers with innovative tools that make aquaculture more efficient, 
          sustainable, and profitable. Whether you're a beginner or an expert, Acquafarm is your smart farming partner.
        </p>
        <p className="text-gray-700">Thanks for joining us on this journey. 🐟🚀</p>
        </div >
        <h2><b>OUR KEY FEATURES</b></h2>
        <div className="bg-blue-100 p-6 rounded shadow-md   w-100 h-50"> 
          <b>🕒 Real-Time Data Visualization:</b>
          <p>Monitor water quality metrics and 
             fish health in real time to ensure 
            optimal farming conditions.</p>
        </div>

        <div className="bg-white-100 p-6 rounded   shadow-md w-100 h-50">
        <b>💡 AI-Driven Insights:</b>
          <p>Get accurate growth predictions, 
             detect potential diseases early, 
              and receive harvest suggestions
              to boost productivity.</p>
        </div > 


        <div className="bg-blue-100 p-6 rounded shadow-md w-100 h-50">
        <b>📊 Comprehensive Analytics and
        🚨 Automated Alerts</b>
          <p>Stay informed with instant
            notifications for critical changes
            and potential risks, allowing for quick
            response and mitigation.</p>
        </div>
      </div>
    );
  }
  
 
  

export default About
