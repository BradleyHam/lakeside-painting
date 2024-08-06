import React, { useState } from 'react';
import { format } from 'date-fns';

const BookingDetailsForm = ({ selectedDate, selectedTimeSlot, setShowForm }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    address: '',
    city: 'Queenstown',
    postcode: '',
    objectives: ''
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.service) newErrors.service = "Please select a service";
    if (!formData.address.trim()) newErrors.address = "Address is required";
    if (!formData.postcode.trim()) newErrors.postcode = "Postcode is required";
    if (!formData.objectives.trim()) newErrors.objectives = "Project details are required";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", formData);
      // Here you would typically send the data to your server
      alert("Booking submitted successfully!");
      setShowForm(false);
    }
  }; 

  return (
    <div className="bg-white shadow-lg border text-primary p-8 rounded-xl">
      <h2 className="text-2xl font-bold mb-4">Booking Details</h2>
      <p className="text-sm mb-4 text-gray-600">Note: We currently only service the Queenstown area.</p>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-2 opacity-70 text-sm">Your name *</label>
          <input 
            type="text" 
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className={`w-full p-2 bg-gray-100 rounded text-sm ${errors.name ? 'border-red-500 border' : ''}`} 
            required 
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>
        <div className="mb-4">
          <label className="block mb-2 opacity-70 text-sm">Email address *</label>
          <input 
            type="email" 
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className={`w-full p-2 bg-gray-100 rounded text-sm ${errors.email ? 'border-red-500 border' : ''}`} 
            required 
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>
        <div className="mb-4">
          <label className="block mb-2 opacity-70 text-sm">Phone number *</label>
          <input 
            type="tel" 
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className={`w-full p-2 bg-gray-100 rounded text-sm ${errors.phone ? 'border-red-500 border' : ''}`} 
            required 
          />
          {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
        </div>
       
        <div className="mb-4">
          <label className="block mb-2 opacity-70 text-sm">Address *</label>
          <input 
            type="text" 
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            className={`w-full p-2 bg-gray-100 rounded text-sm ${errors.address ? 'border-red-500 border' : ''}`} 
            required 
          />
          {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
        </div>
        <div className="mb-4">
          <label className="block mb-2 opacity-70 text-sm">City</label>
          <input 
            type="text" 
            name="city"
            value={formData.city}
            className="w-full p-2 bg-gray-200 rounded text-sm" 
            disabled 
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 opacity-70 text-sm">Project details <span className='opacity-70'>{`(optional)`}</span></label>
          <textarea 
            name="objectives"
            value={formData.objectives}
            onChange={handleInputChange}
            className={`w-full p-2 bg-gray-100 rounded text-sm ${errors.objectives ? 'border-red-500 border' : ''}`} 
            rows="4" 
          ></textarea>
          {errors.objectives && <p className="text-red-500 text-sm mt-1">{errors.objectives}</p>}
        </div>
        <div className="flex justify-between">
          <button type="button" onClick={() => setShowForm(false)} className="bg-accent text-primary px-4 py-2 rounded  font-semibold">Back</button>
          <button type="submit" className="bg-secondary text-white px-4 py-2 rounded font-semibold">Confirm</button>
        </div>
      </form>
    </div>
  );
};

export default BookingDetailsForm;