import { ToastContainer, toast } from 'react-toastify';
import React, { useState } from 'react';
import axios from 'axios';

export default function Registrations() {
    let [fullname, setFullname] = useState("");
    let [age, setAge] = useState(0);
    let [gender, setGender] = useState("");
    let [phone, setPhone] = useState("");
    let [address, setAddress] = useState("");

    function clear() {
        setFullname("");
        setAge(0);
        setGender("");
        setPhone("");
        setAddress("");
    }

    async function save_data() {
        try {
      let Fullname_RE = /^[A-Za-z_-]{3,20}$/
      if (!fullname || age === 0 || !gender || !phone) {
        toast.error("!Please Fill Required Fields First!")
      }else if (!Fullname_RE.test(fullname)) {
        toast.error("Invalid Name")
      }else if(age < 18) {
        toast.error("Age Must Be Greater Than 18")
      } else {
        await axios.post("http://localhost:7062/api/patients/reg", {
            Full_Name: fullname,
            Age: age,
            Gender: gender,
            Phone_Number: phone,
            Address: address
        })
        console.log("Patient Data Has Been Registered Successfully");
        toast.success("Patient Data Has Been Registered Successfully");
        clear();
      }
            
        } catch (error) {
            if (error.status === 409) {
                toast.error("This Phone Number Has Already Exist")
            } else {
                toast.error(error)
                console.log(error)
            }
        }
    }

  return (
    <div className="container mt-5">
  <hr />
  <h1 className="text-center mb-4">Patient Registration Form</h1>
  <hr />

  <div className="row justify-content-center">
    <div className="col-md-6">
      <div className="p-4 rounded shadow-sm" style={{ maxWidth: '500px', backgroundColor: '#B0C4DE' }}>

        <div className="mb-3">
          <input
            type="text"
            name="fullName"
            className="form-control"
            placeholder="Full Name"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <input
            type="number"
            name="age"
            className="form-control"
            placeholder="Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <select
            name="gender"
            className="form-select"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="mb-3">
          <input
            type="text"
            name="phoneNumber"
            className="form-control"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <input
            type="text"
            name="address"
            className="form-control"
            placeholder="Address (optional)"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary" onClick={save_data}>
            Register
          </button>
        </div>

      </div>
    </div>
  </div>

  <ToastContainer />
</div>
  )
}
