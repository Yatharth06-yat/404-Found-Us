import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './MedicalHistoryPage.css';
import MedicalTimeline from './MedicalTimeline';

export default function MedicalHistoryPage() {
  const [openId, setOpenId] = useState(null);
  const [medicalHistory, setMedicalHistory] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/medicalHistory")
      .then(res => res.json())
      .then(data => setMedicalHistory(data));
  }, []);

  const handleViewPdf = (item) => {
    if (!item.report || !item.report.url) {
      toast.error('PDF file is not available');
      return;
    }
    window.open(item.report.url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="simple-timeline-outer">
      <ToastContainer />
      <MedicalTimeline
        history={medicalHistory}
        openId={openId}
        setOpenId={setOpenId}
        onViewPdf={handleViewPdf}
      />
    </div>
  );
}
