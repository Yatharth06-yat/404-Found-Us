import React, { useRef, useEffect } from "react";
import Chart from "chart.js/auto";
import "../style/dashboard.css";

export default function Charts({ patients, doctors }) {
  const patientChartRef = useRef(null);
  const doctorChartRef = useRef(null);
  const patientChartInstance = useRef(null);
  const doctorChartInstance = useRef(null);

  useEffect(() => {
    const malePatients = patients.filter(p => p.gender === "Male").length;
    const femalePatients = patients.filter(p => p.gender === "Female").length;

    const maleDoctors = doctors.filter(d => d.gender === "Male").length;
    const femaleDoctors = doctors.filter(d => d.gender === "Female").length;

    // Destroy previous instances if they exist
    if (patientChartInstance.current) {
      patientChartInstance.current.destroy();
    }
    if (doctorChartInstance.current) {
      doctorChartInstance.current.destroy();
    }

    // Patient Chart
    if (patientChartRef.current) {
      patientChartInstance.current = new Chart(patientChartRef.current, {
        type: "doughnut",
        data: {
          labels: ["Male", "Female"],
          datasets: [
            {
              data: [malePatients, femalePatients],
              backgroundColor: ["#60a5fa", "#f472b6"],
              borderWidth: 2,
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            legend: { position: "bottom" },
            title: {
              display: true,
              text: "Patient Gender Distribution",
              font: { size: 18 },
            },
          },
        },
      });
    }

    // Doctor Chart
    if (doctorChartRef.current) {
      doctorChartInstance.current = new Chart(doctorChartRef.current, {
        type: "doughnut",
        data: {
          labels: ["Male", "Female"],
          datasets: [
            {
              data: [maleDoctors, femaleDoctors],
              backgroundColor: ["#0ea5e9", "#f43f5e"],
              borderWidth: 2,
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            legend: { position: "bottom" },
            title: {
              display: true,
              text: "Doctor Gender Distribution",
              font: { size: 18 },
            },
          },
        },
      });
    }
  }, [patients, doctors]);

  return (
    <div className="chart-wrapper">
      <div className="chart-container">
        <canvas ref={patientChartRef}></canvas>
      </div>
      <div className="chart-container">
        <canvas ref={doctorChartRef}></canvas>
      </div>
    </div>
  );
}
