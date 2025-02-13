import React from "react";
import "../assets/styles/Overview.css";

export default function Overview() {
  // Dynamic Data
  const stats = [
    {
      title: "Pending Tasks",
      value: "3 pending service requests",
      color: "#ffcc00",
    },
    {
      title: "Completed Tasks",
      value: "10 tasks completed this week",
      color: "#28a745",
    },
    {
      title: "Ratings & Reviews",
      value: "Your average rating is 4.5 stars",
      color: "#007bff",
    },
  ];

  return (
    <div className="dashboard-overview">
      <h2>Dashboard Overview</h2>
      <p>
        Welcome to your dashboard! Here’s a quick overview of your recent
        activity.
      </p>

      <div className="overview-cards">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="card"
            style={{ borderLeft: `5px solid ${stat.color}` }}
          >
            <h3>{stat.title}</h3>
            <p>{stat.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
