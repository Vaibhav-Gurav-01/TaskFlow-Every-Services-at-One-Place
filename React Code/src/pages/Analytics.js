import React, { useState } from "react";

export default function Analytics() {
  // State for analytics data
  const [analyticsData, setAnalyticsData] = useState({
    totalRevenue: 150,
    completedTasks: 2,
    customerRatings: 4.7,
    totalReviews: 25,
    topServices: [
      { name: "Plumbing", tasks: 20 },
      { name: "Cleaning", tasks: 15 },
      { name: "Virtual Assistance", tasks: 5 },
    ],
  });

  // Function to update analytics data (simulating new data)
  const updateAnalytics = () => {
    setAnalyticsData({
      totalRevenue: Math.floor(Math.random() * 1000) + 100, // Random revenue
      completedTasks: Math.floor(Math.random() * 20) + 1, // Random completed tasks
      customerRatings: (Math.random() * 2 + 3).toFixed(1), // Ratings between 3.0 and 5.0
      totalReviews: Math.floor(Math.random() * 50) + 10, // Random review count
      topServices: [
        { name: "Plumbing", tasks: Math.floor(Math.random() * 50) },
        { name: "Cleaning", tasks: Math.floor(Math.random() * 30) },
        { name: "Virtual Assistance", tasks: Math.floor(Math.random() * 15) },
      ],
    });
  };

  return (
    <div className="analytics-container">
      <style>
        {`
          .analytics-container {
            max-width: 800px;
            margin: auto;
            padding: 20px;
            text-align: center;
            background: #f8f9fa;
            border-radius: 10px;
            box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
          }

          .analytics-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 20px;
            margin-top: 20px;
          }

          .analytics-card {
            background: white;
            padding: 15px;
            border-radius: 8px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
          }

          .analytics-card h3 {
            margin-bottom: 10px;
            color: #007bff;
          }

          .update-btn {
            margin-top: 20px;
            padding: 10px 15px;
            background: #28a745;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 16px;
          }

          .update-btn:hover {
            background: #218838;
          }
        `}
      </style>

      <h2>📊 Analytics Dashboard</h2>

      <div className="analytics-grid">
        <div className="analytics-card">
          <h3>Total Revenue</h3>
          <p>💰 {analyticsData.totalRevenue} Rs this month</p>
        </div>

        <div className="analytics-card">
          <h3>Completed Tasks</h3>
          <p>✅ {analyticsData.completedTasks} tasks completed this month</p>
        </div>

        <div className="analytics-card">
          <h3>Customer Ratings</h3>
          <p>
            ⭐ {analyticsData.customerRatings} stars (Based on{" "}
            {analyticsData.totalReviews} reviews)
          </p>
        </div>

        <div className="analytics-card">
          <h3>Top Performing Services</h3>

          {analyticsData.topServices.map((service, index) => (
            <li key={index}>
              {service.name} - {service.tasks} tasks
            </li>
          ))}
        </div>
      </div>

      {/* Update Analytics Button */}
      <button className="update-btn" onClick={updateAnalytics}>
        🔄 Update Analytics
      </button>
    </div>
  );
}
