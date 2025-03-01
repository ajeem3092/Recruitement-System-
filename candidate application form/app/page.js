"use client";
import { useState } from "react";
import styles from "./styles.module.css";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    linkedIn: "",
    resume: null,
    skills: "",
    experience: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, resume: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Form Submitted Successfully!");
  };

  return (
    <div className={styles.formContainer}>
      <h2>Candidate Submission Form</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required />
        <input type="url" name="linkedIn" placeholder="LinkedIn URL" value={formData.linkedIn} onChange={handleChange} required />
        <label>Upload Resume (PDF):</label>
        <input type="file" name="resume" accept=".pdf" onChange={handleFileChange} />
        <textarea name="skills" placeholder="Enter Skills" value={formData.skills} onChange={handleChange} required />
        <textarea name="experience" placeholder="Enter Experience" value={formData.experience} onChange={handleChange} required />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
