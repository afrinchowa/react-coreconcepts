import React, { useState, useEffect } from "react";

const FocusTimer = () => {
  const [timeLeft, setTimeLeft] = useState(1500); // 25 min
  const [isActive, setIsActive] = useState(false);
  const [duration, setDuration] = useState(1500); // dynamic session length

  useEffect(() => {
    let timer;
    if (isActive && timeLeft > 0) {
      timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    } else if (timeLeft === 0) {
      new Audio(
        "https://assets.mixkit.co/sfx/preview/mixkit-bell-notification-933.mp3"
      ).play();
      setIsActive(false);
    }
    return () => clearInterval(timer);
  }, [isActive, timeLeft]);

  const formatTime = (seconds) => {
    const m = String(Math.floor(seconds / 60)).padStart(2, "0");
    const s = String(seconds % 60).padStart(2, "0");
    return `${m}:${s}`;
  };

  const handleReset = () => {
    setIsActive(false);
    setTimeLeft(duration);
  };

  const handleChangeDuration = (mins) => {
    setDuration(mins * 60);
    setTimeLeft(mins * 60);
    setIsActive(false);
  };

  const progress = ((duration - timeLeft) / duration) * 100;

  return (
    <div className="max-w-sm mx-auto bg-yellow-100 p-6 rounded-2xl shadow-lg text-center">
      <h2 className="text-2xl font-bold text-yellow-800 mb-4">⏳ Focus Timer</h2>

      {/* Circular progress ring */}
      <div className="relative w-40 h-40 mx-auto mb-4">
        <svg className="w-full h-full transform -rotate-90">
          <circle
            cx="80"
            cy="80"
            r="70"
            stroke="#facc15"
            strokeWidth="12"
            fill="transparent"
          />
          <circle
            cx="80"
            cy="80"
            r="70"
            stroke="#2563eb"
            strokeWidth="12"
            fill="transparent"
            strokeDasharray={2 * Math.PI * 70}
            strokeDashoffset={
              2 * Math.PI * 70 - (progress / 100) * 2 * Math.PI * 70
            }
            className="transition-all duration-500 ease-linear"
          />
        </svg>
        <p className="absolute inset-0 flex items-center justify-center text-3xl font-bold">
          {formatTime(timeLeft)}
        </p>
      </div>

      {/* Controls */}
      <div className="flex justify-center gap-4 mb-4">
        <button
          onClick={() => setIsActive(!isActive)}
          className={`px-5 py-2 rounded-lg text-white transition ${
            isActive ? "bg-yellow-600" : "bg-green-600"
          }`}
        >
          {isActive ? "Pause" : "Start"}
        </button>
        <button
          onClick={handleReset}
          className="px-5 py-2 rounded-lg bg-red-600 text-white"
        >
          Reset
        </button>
      </div>

      {/* Quick session buttons */}
      <div className="flex justify-center gap-3">
        {[5, 15, 25].map((m) => (
          <button
            key={m}
            onClick={() => handleChangeDuration(m)}
            className="px-3 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600 text-sm"
          >
            {m} min
          </button>
        ))}
      </div>
    </div>
  );
};

export default FocusTimer;
