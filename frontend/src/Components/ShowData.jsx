import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function ShowData() {
    const [patients_data, setPatients_data] = useState([]);

    useEffect(() => {
        get_data();
    }, []);

    async function get_data() {
        try {
            const response = await axios.get("http://localhost:7062/api/patients/get");
            setPatients_data(response.data);
        } catch (e) {
            console.error("Error fetching data:", e);
        }
    }

    return (
        <div className='container my-5'>
            <div className="text-center mb-4">
                <h1 className="fw-bold text-primary">Patient's Details</h1>
                <hr />
            </div>

            {patients_data.length === 0 ? (
                <div className="alert alert-warning text-center" role="alert">
                    <h5>No patient records found.</h5>
                </div>
            ) : (
                <div className="table-responsive">
                    <table className='table table-bordered table-hover align-middle'>
                        <thead className="table-primary text-center">
                            <tr>
                                <th>Full Name</th>
                                <th>Age</th>
                                <th>Gender</th>
                                <th>Phone Number</th>
                                <th>Registration Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {patients_data.map((patient) => (
                                <tr key={patient.id}>
                                    <td>{patient.Full_Name}</td>
                                    <td>{patient.Age}</td>
                                    <td>
                                        <span className={`badge bg-${patient.Gender === 'Male' ? 'primary' : 'danger'}`}>
                                            {patient.Gender}
                                        </span>
                                    </td>
                                    <td>{patient.Phone_Number}</td>
                                    <td>{new Date(patient.Registration_Date).toLocaleDateString()}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}
