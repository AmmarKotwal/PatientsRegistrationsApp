import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Patient Registration App</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Patient's Registration Form</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/show">Patient's Details</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}
