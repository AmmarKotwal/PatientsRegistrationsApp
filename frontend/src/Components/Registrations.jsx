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
    <div className='container'> <hr /><br />
    <h1>Patients Registration's Form</h1> <hr /><br />
    <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={fullname}
          onChange={(e) => setFullname(e.target.value)}
        /><br/>

        <input
          type="number"
          name="age"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        /><br/>

        <select
          name="gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select><br/>

        <input
          type="text"
          name="phoneNumber"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        /><br/>

        <input
          type="text"
          name="address"
          placeholder="Address (optional)"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        /><br/>

        <button type="submit" onClick={save_data}>Register</button>
        <ToastContainer />
      
    </div>
  )
}
