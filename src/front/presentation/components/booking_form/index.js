import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';


const HairServiceBookingForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const validateForm = () => {
    // Check if the name is not empty
    if (name.trim() === '') {
      alert('Please enter your name.');
      return false;
    }
  
    // Check if the phone number is valid (e.g., 10 digits)
    const phonePattern = /^\d{11}$/;
    if (!phonePattern.test(phone)) {
      alert('Please enter a valid phone number (10 digits without spaces).');
      return false;
    }
  
    // Check if a hair service is selected
    if (service === '') {
      alert('Please select a hair service.');
      return false;
    }
  
    // Check if the date is not empty
    if (date.trim() === '') {
      alert('Please select a date.');
      return false;
    }
  
    // Check if the time is not empty
    if (time.trim() === '') {
      alert('Please select a time.');
      return false;
    }
  
    // Add more validation checks as needed
  
    return true;
  };
  


  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    // Create an object to hold the form data
    const bookingData = {
      name: name,
      email: email,
      phone: phone,
      service: service,
      date: date,
      time: time
    };

    // Make the HTTP POST request to the backend API
    axios.post('http://localhost:8080/api/bookings/add', bookingData)
      .then((response) => {
        // Handle the response from the backend if needed
        console.log(response.data);
      })
      .catch((error) => {
        // Handle any errors that occur during the request
        console.error(error);
      });
  };


  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Hair Service Booking</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Phone</label>
          <input
            type="tel"
            className="form-control"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Hair Service</label>
          <select
            className="form-select"
            value={service}
            onChange={(e) => setService(e.target.value)}
            required
          >
            <option value="">Select a service</option>
            <option value="Haircut">Haircut</option>
            <option value="Coloring">Coloring</option>
            <option value="Styling">Styling</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Date</label>
          <input
            type="date"
            className="form-control"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Time</label>
          <input
            type="time"
            className="form-control"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Book Now
        </button>
      </form>
    </div>
  );
};

export default HairServiceBookingForm;
