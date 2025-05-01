import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { useState } from 'react';
import axios from 'axios';

export default function Registrations() {
  const [fullname, setFullname] = useState("");
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  function clear() {
    setFullname("");
    setAge(0);
    setGender("");
    setPhone("");
    setAddress("");
  }

  async function save_data() {
    try {
      const Fullname_RE = /^[A-Za-z\s_-]{3,20}$/;

      if (!fullname || age === 0 || !gender || !phone) {
        toast.error("Please fill in all required fields.");
      } else if (!Fullname_RE.test(fullname)) {
        toast.error("Invalid name. Only letters, spaces, underscores, and hyphens allowed.");
      } else if (age < 18) {
        toast.error("Age must be at least 18.");
      } else {
        await axios.post("http://localhost:7062/api/patients/reg", {
          Full_Name: fullname,
          Age: age,
          Gender: gender,
          Phone_Number: phone,
          Address: address
        });
        toast.success("Patient registered successfully!");
        clear();
      }
    } catch (error) {
      if (error.response?.status === 409) {
        toast.error("This phone number already exists.");
      } else {
        console.error(error);
        toast.error("An error occurred during registration.");
      }
    }
  }

  return (
    <div className="container my-5">
      <div className="text-center mb-4">
        <h1 className="fw-bold text-primary">Patient's Registration Form</h1>
        <hr />
      </div>

      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-lg border-0 rounded-4 bg-light">
            <div className="card-body p-4">
              <div className="mb-3">
                <label className="form-label fw-semibold">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter full name"
                  value={fullname}
                  onChange={(e) => setFullname(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold">Age</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Enter age"
                  value={age}
                  onChange={(e) => setAge(Number(e.target.value))}
                />
              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold">Gender</label>
                <select
                  className="form-select"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option value="">Select gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold">Phone Number</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter phone number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>

              <div className="mb-4">
                <label className="form-label fw-semibold">Address (Optional)</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>

              <div className="d-grid">
                <button className="btn btn-primary" onClick={save_data}>
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
}
