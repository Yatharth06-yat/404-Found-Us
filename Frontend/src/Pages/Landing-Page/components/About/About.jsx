import React, { useEffect, useState } from 'react';
import "./About.css";

const About = () => {
    const [topDoctors, setTopDoctors] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/topDoctors")
            .then(res => res.json())
            .then(data => setTopDoctors(data));
    }, []);

    return (
        <>
            <div className="about-container">
                <div className="about-content-wrapper">

                    <div className="story-section">
                        <h2 className="section-title">
                            Our Story
                        </h2>
                        <p className="story-text">
                            CityCare Hospital began with a vision: to provide compassionate, world-class healthcare to everyone in our community. Over the decades, we've grown from a small clinic to a multi-specialty hospital, always putting patients first.
                        </p>

                        <div className="timeline-wrapper">
                            <ul className="timeline-list">
                                <div className="timeline-height-indicator"></div>
                                <li className="timeline-item">
                                    <strong className="timeline-year">1999:</strong> CityCare founded as a 20-bed community clinic.
                                </li>
                                <li className="timeline-item">
                                    <strong className="timeline-year">2007:</strong> Expanded to include advanced diagnostic and surgical facilities.
                                </li>
                                <li className="timeline-item">
                                    <strong className="timeline-year">2015:</strong> Accredited as a leading multi-specialty hospital in the region.
                                </li>
                                <li className="timeline-item">
                                    <strong className="timeline-year">2022:</strong> Launched telemedicine and digital health services.
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="mission-values-section">
                        <h2 className="section-title">
                            Our Mission & Values
                        </h2>
                        <p className="mission-text">
                            <strong className="mission-value-strong">Mission:</strong> To heal, comfort, and serve with the highest standards of medical excellence and compassion.
                        </p>
                        <p className="mission-text">
                            <strong className="mission-value-strong">Values:</strong> Integrity, empathy, innovation, teamwork, and respect for every individual.
                        </p>
                    </div>

                    <div className="team-section">
                        <h2 className="section-title">
                            Meet Our Team
                        </h2>
                        <div className="team-grid">
                            {topDoctors.map(doctor => (
                                <div
                                    key={doctor.id || doctor.name}
                                    className="doctor-card"
                                >
                                    <img
                                        src={doctor.img || "https://placehold.co/150x150/cccccc/white?text=Doctor"}
                                        alt={doctor.name}
                                        className="doctor-img"
                                        onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/150x150/cccccc/white?text=Error"; }}
                                    />
                                    <h1 className="doctor-name">{doctor.name}</h1>
                                    <p className="doctor-degree">{doctor.degree}</p>
                                    <p className="doctor-experience">{doctor.experience}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="why-choose-section">
                        <h2 className="section-title">
                            Why Choose CityCare?
                        </h2>
                        <ul className="why-choose-list">
                            <li className="why-choose-item">
                                <span className="why-choose-icon">✔️</span>
                                State-of-the-art facilities and cutting-edge technology
                            </li>
                            <li className="why-choose-item">
                                <span className="why-choose-icon">✔️</span>
                                24/7 emergency and critical care services
                            </li>
                            <li className="why-choose-item">
                                <span className="why-choose-icon">✔️</span>
                                Personalized patient care and support
                            </li>
                            <li className="why-choose-item">
                                <span className="why-choose-icon">✔️</span>
                                Comprehensive specialties under one roof
                            </li>
                            <li className="why-choose-item">
                                <span className="why-choose-icon">✔️</span>
                                Trusted by thousands of families
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
