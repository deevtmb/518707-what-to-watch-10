import { useEffect, useState } from 'react';
import { getTimeLeft } from '../../utils/common';

type PlayerTimerProps = {
  runTime: number,
  isPlaying: boolean,
  onTimerChangeHandler: (fullTime: number, leftTime: number) => void,
}

export default function PlayerTimer({runTime, isPlaying, onTimerChangeHandler}: PlayerTimerProps) {
  const SECONDS_IN_MINUTE = 60;
  const TIMER_UPDATE_DELAY = 1000;
  const fullTime = runTime * SECONDS_IN_MINUTE;
  const [timeLeft, setTimeLeft] = useState(fullTime);

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => setTimeLeft((prev) => prev - 1), TIMER_UPDATE_DELAY);
      onTimerChangeHandler(fullTime, timeLeft);

      return () => clearInterval(interval);
    }
  }, [timeLeft, isPlaying, onTimerChangeHandler, fullTime]);

  return (
    <div className="player__time-value">{getTimeLeft(timeLeft)}</div>
  );
}
