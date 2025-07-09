import React, { useEffect, useState } from "react";
import HealthReportTrendCharts from "./HealthReportTrendCharts";

export default function HealthTrendsSection() {
  const [reportsData, setReportsData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/reports")
      .then(res => res.json())
      .then(data => setReportsData(data));
  }, []);

  return (
    <div className="health-trends-container">
      <HealthReportTrendCharts reportsData={reportsData} />
    </div>
  );
}
