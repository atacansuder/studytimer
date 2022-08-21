import { useEffect, useState } from "react";
import styles from "./Timer.module.css";

// Default times are 25 min. for studying, 5 min. for short break and 15 min. for long break
const defaultTimer = {
  study: 1500000,
  short_break: 300000,
  long_break: 900000,
};

function Timer({ setPomodoros }) {
  const [time, setTime] = useState(defaultTimer.study);
  const [parsedTime, setParsedTime] = useState("25:00");
  const [circleProgress, setCircleProgress] = useState("0");
  const [paused, setPaused] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (paused) return;
      setTime((time) => time - 1000);
      setParsedTime(parseTime(time));
      setCircleProgress("-" + JSON.stringify(251.3 - calculateOffset(time)));
    }, 1000);

    return () => clearInterval(intervalId);
  }, [time, paused]);

  const parseTime = (timeToParse) => {
    const minutes = Math.floor(timeToParse / 60000);
    const seconds = Math.floor((timeToParse % 60000) / 1000);
    return minutes + ":" + (seconds < 10 ? "0" + seconds : seconds);
  };

  const calculateOffset = (timeToCalculate) => {
    const percentage = (100 * timeToCalculate) / 1500000;
    return (percentage * 251.3) / 100;
  };

  return (
    <div className={styles.timer_container}>
      <div className={styles.base_timer}>
        <svg viewBox="0 0 100 100">
          <g
            className={styles.base_timer__circle}
            transform="rotate(-90 50 50)"
          >
            <circle
              className={styles.base_timer__circle_elapsed}
              cx="50"
              cy="50"
              r="40"
              strokeDasharray="251.3"
              strokeDashoffset={circleProgress}
            />
          </g>
        </svg>
        <span className={styles.base_timer__time}>{parsedTime}</span>
      </div>
      <div>
        <button
          className={paused ? styles.button_paused : styles.button_unpaused}
          onClick={(e) => setPaused(!paused)}
        >
          {paused ? "Start" : "Stop"}
        </button>
      </div>
    </div>
  );
}

export default Timer;
