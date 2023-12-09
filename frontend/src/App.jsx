// client/src/App.js
import React, { useState } from 'react';
import ConfigPage from './ConfigPage';
import SubmissionPage from './SubmissionPage';
import axios from 'axios';

const App = () => {
  const [fields, setFields] = useState({
    name: false,
    age: false,
    gender: false,
    address: false,
  });

  

const handleDataSubmission = async (formData) => {
  try {
    const response = await axios.post('http://localhost:5000/api/saveUser', formData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    console.log(response.data);
  } catch (error) {
    console.error('Error submitting data:', error);
  }
};


  return (
    <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
      <ConfigPage fields={fields} setFields={setFields} />
      <SubmissionPage fields={fields} onSubmit={handleDataSubmission} />
    </div>
  );
};

export default App;
