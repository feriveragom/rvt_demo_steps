import React, { useState } from 'react';

export default function Step1Content({ onNext }) {
  const [formData, setFormData] = useState({
    jobTitle: '',
    jobLocation: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));

    // Movimiento al siguiente paso
    onNext();
  };

  return (
    <div className='m-2 px-5 py-2 border'>
      <h2>Step 1 Content</h2>
      <div className="mb-4">
        <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-700">Job Title</label>
        <input type="text" id="jobTitle" name="jobTitle" value={formData.jobTitle} onChange={handleChange} className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
      </div>
      <div className="mb-4">
        <label htmlFor="jobLocation" className="block text-sm font-medium text-gray-700">Job Location</label>
        <input type="text" id="jobLocation" name="jobLocation" value={formData.jobLocation} onChange={handleChange} className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
      </div>
    </div>
  );
}
