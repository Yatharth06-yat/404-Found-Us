import React, { useEffect, useState } from "react";
import DailyReminders from "./DailyReminders";

export default function DailyRemindersContainer() {
  const [prescriptions, setPrescriptions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/prescriptions")
      .then(res => res.json())
      .then(data => setPrescriptions(data));
  }, []);

  return <DailyReminders prescriptions={prescriptions} />;
}
