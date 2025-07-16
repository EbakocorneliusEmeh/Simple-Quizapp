import React from 'react';

const ProgressBar = ({ current, total }) => {
  const percentage = (current / total) * 100;

  return (
    <div style={{ marginBottom: '1rem' }}>
      <div style={{ background: '#ccc', height: '10px', borderRadius: '5px' }}>
        <div
          style={{
            width: `${percentage}%`,
            background: '#3498db',
            height: '100%',
            borderRadius: '5px',
            transition: 'width 0.3s ease',
          }}
        ></div>
      </div>
      <small>{current} of {total} questions</small>
    </div>
  );
};

export default ProgressBar;
