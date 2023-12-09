// client/src/SubmissionPage.js
import React, { useState } from 'react';

const SubmissionPage = ({ fields, onSubmit }) => {
  const [formData, setFormData] = useState({});

  const handleChange = (fieldName, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }));
  };

  const handleSubmit = () => {
    onSubmit(formData);
    setFormData({});
  };

  return (
    <div>
      <h2>Fill the data to Submit</h2>
      <form >
        {Object.keys(fields).map(
          (fieldName) =>
            fields[fieldName] && (
              <div key={fieldName} 
              style={{marginTop:'5px',marginBottom:'5px'}}
              >
                <label>{fieldName}:</label>
                <input
                  type="text"
                  value={formData[fieldName] || ''}
                  onChange={(e) => handleChange(fieldName, e.target.value)}
                  style={fieldName==='age'?{marginLeft:'18px'}
                 :null}
                />
              </div>
            )
        )}
        <button type="button" onClick={handleSubmit} style={{textAlign:'center'}}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default SubmissionPage;
