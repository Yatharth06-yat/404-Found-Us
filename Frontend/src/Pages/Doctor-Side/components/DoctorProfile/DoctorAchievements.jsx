import React, { useEffect, useState } from "react";

export default function DoctorAchievements() {
    const [achievements, setAchievements] = useState([]);
    const [input, setInput] = useState("");
    const [msg, setMsg] = useState("");

    useEffect(() => {
        fetch("http://localhost:3000/achievements")
            .then(res => res.json())
            .then(data => setAchievements(data));
    }, []);

    const addAchievement = () => {
        if (!input.trim()) {
            setMsg("Please enter an achievement.");
            setTimeout(() => setMsg(""), 3000);
            return;
        }
        fetch("http://localhost:3000/achievements", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ text: input.trim() })
        })
            .then(() => fetch("http://localhost:3000/achievements"))
            .then(res => res.json())
            .then(data => setAchievements(data));
        setInput("");
        setMsg("Achievement added successfully!");
        setTimeout(() => setMsg(""), 3000);
    };

    return (
        <section className="doctor-achievements">
            <h2>Achievements & Recognition</h2>
            <div className="achievements-list-container">
                <ul>
                    {achievements.map((ach, i) => (
                        <li key={ach.id || i}>{ach.text || ach}</li>
                    ))}
                </ul>
            </div>
            <div className="add-achievement-form">
                <input
                    type="text"
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    placeholder="Add new achievement"
                />
                <button onClick={addAchievement} className="animated-button">
                    Add
                </button>
            </div>
            {msg && <div className="message">{msg}</div>}
        </section>
    );
}
