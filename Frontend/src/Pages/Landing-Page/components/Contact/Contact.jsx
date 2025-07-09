import { useEffect, useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/doctors")
      .then(res => res.json())
      .then(data => setDoctors(data));
  }, []);

  return (
    <>
      <div className="contact-main-container">
        <div className="contact-container">
          <h2 className="contact-title">
            Contact Us
          </h2>

          <div className="contact-grid">
            {doctors.map((doctor) => (
              <div
                key={doctor.id}
                className="contact-card"
              >
                <div className="contact-card-header">
                  <div className="contact-doctor-icon">
                    {doctor.icon || '👤'}
                  </div>
                  <div>
                    <h1 className="contact-doctor-name">{doctor.name}</h1>
                    <p className="contact-doctor-experience">{doctor.experience}</p>
                  </div>
                </div>

                <div className="contact-details-group">
                  <p className="contact-detail-item"><span className="contact-detail-label">Post:</span> {doctor.post}</p>
                  <p className="contact-detail-item"><span className="contact-detail-label">Qualifications:</span> {doctor.qualifications}</p>
                  <p className="contact-detail-item"><span className="contact-detail-label">Department:</span> {doctor.department}</p>
                </div>

                <div className="contact-info-section">
                  <h1 className="contact-info-title">Contact Details:</h1>
                  <p className="contact-info-text">{doctor.contact_number}</p>
                  <p className="contact-info-text">{doctor.email}</p>
                </div>

                <div className="contact-info-section">
                  <h1 className="contact-info-title">Availability:</h1>
                  <p className="contact-info-text">{doctor.availability}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
