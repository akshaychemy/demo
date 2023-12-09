// client/src/ConfigPage.js
import React, { useState } from 'react';

const ConfigPage = ({ fields, setFields }) => {
  const toggleField = (fieldName) => {
    setFields((prevFields) => ({
      ...prevFields,
      [fieldName]: !prevFields[fieldName],
    }));
  };

  return (
    <div>
      <h2>Select Required Fields</h2>
      <div>
        {Object.keys(fields).map((fieldName) => (
          <div key={fieldName}>
            <input
              type="checkbox"
              checked={fields[fieldName]}
              onChange={() => toggleField(fieldName)}
            />
            {fieldName}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConfigPage;
