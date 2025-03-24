import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
    const [view, setView] = useState("jobs"); // Controls which view is displayed
    const [jobs, setJobs] = useState([]);
    const [formData, setFormData] = useState({ email: "", password: "", name: "" });

    useEffect(() => {
        if (view === "jobs") {
            fetchJobs();
        }
    }, [view]);

    const fetchJobs = async () => {
        try {
            const response = await fetch("http://localhost:8080/api/jobs");
            const data = await response.json();
            setJobs(data);
        } catch (error) {
            console.error("Error fetching jobs:", error);
        }
    };

    const handleSubmit = async (type) => {
        const endpoint = type === "register" ? "/api/auth/register" : "/api/auth/login";
        try {
            const response = await fetch(`http://localhost:8080${endpoint}`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });
            const data = await response.json();
            console.log(data);

            if (response.ok && type === "login") {
                localStorage.setItem("token", data.token);
                setView("jobs");
            } else if (response.ok && type === "register") {
                alert("Registration successful. Please log in.");
                setView("login");
            } else {
                alert(data.message || "An error occurred");
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    const applyToJob = async (jobId) => {
        const token = localStorage.getItem("token");
        if (!token) {
            alert("You need to log in to apply.");
            setView("login");
            return;
        }

        try {
            const response = await fetch("http://localhost:8080/api/jobs/apply", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({ jobId }),
            });

            const data = await response.json();
            if (response.ok) {
                alert("Application submitted successfully!");
            } else {
                alert(data.message || "Error applying to the job.");
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    const renderJobs = () => (
        <div>
            <h2>Available Jobs</h2>
            <div className="job-listings">
                {jobs.map((job) => (
                    <div className="job-card" key={job.id}>
                        <h3>{job.title}</h3>
                        <p>{job.description}</p>
                        <button onClick={() => applyToJob(job.id)}>Apply</button>
                    </div>
                ))}
            </div>
        </div>
    );

    const renderForm = (type) => (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                handleSubmit(type);
            }}
        >
            {type === "register" && (
                <input
                    type="text"
                    placeholder="Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
            )}
            <input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            <input
                type="password"
                placeholder="Password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />
            <button className="submit-btn" type="submit">
                {type === "register" ? "Register" : "Login"}
            </button>
        </form>
    );

    return (
        <div>
            {view === "jobs" && renderJobs()}
            {view === "login" && renderForm("login")}
            {view === "register" && renderForm("register")}
            <footer>
                <button onClick={() => setView("login")}>Login</button>
                <button onClick={() => setView("register")}>Register</button>
                <button onClick={() => setView("jobs")}>View Jobs</button>
            </footer>
        </div>
    );
};

export default App;
