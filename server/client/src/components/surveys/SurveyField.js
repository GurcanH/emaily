// SurveyField contains logic to render a single label and text input
import React from 'react';

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ input, label, meta: { error, touched } }) => {
  return (
    <div>
      <label>{label}</label>
      <input {...input} />
      {touched && error}
    </div>
  );
};
