import React, { useEffect, useState } from 'react';

const Timer = ({ duration, onTimeout }) => {
  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    setTimeLeft(duration);
  }, [duration]);

  useEffect(() => {
    if (timeLeft === 0) {
      onTimeout();
      return;
    }

    const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    return () => clearTimeout(timer);
  }, [timeLeft, onTimeout]);

  return (
    <div style={{ marginBottom: '1rem' }}>
      <strong>Time Left:</strong> {timeLeft}s
    </div>
  );
};

export default Timer;
