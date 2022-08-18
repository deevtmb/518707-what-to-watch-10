const MINUTES_IN_HOUR = 60;
const SECONDS_IN_MINUTE = 60;

const Rating = {
  Bad: {
    name: 'Bad',
    ratingBelow: 3,
  },
  Normal: {
    name: 'Normal',
    ratingBelow: 5,
  },
  Good: {
    name: 'Good',
    ratingBelow: 8,
  },
  VeryGood: {
    name: 'Very good',
    ratingBelow: 10,
  },
  Awesome: {
    name: 'Awesome',
    ratingBelow: 3,
  }
} as const;

export const getFormatedRuntime = (runtime: number): string => {
  const runtimeHours = Math.floor(runtime / MINUTES_IN_HOUR);
  const runtimeMinutes = runtime % MINUTES_IN_HOUR;

  if (runtimeHours) {
    return `${runtimeHours}h ${runtimeMinutes}m`;
  }

  return `${runtimeMinutes}m`;
};

export const getFilmRating = (rating: number): string => {
  switch (true) {
    case rating < Rating.Bad.ratingBelow: return Rating.Bad.name;
    case rating < Rating.Normal.ratingBelow: return Rating.Normal.name;
    case rating < Rating.Good.ratingBelow: return Rating.Good.name;
    case rating < Rating.VeryGood.ratingBelow: return Rating.VeryGood.name;
    default: return Rating.Awesome.name;
  }
};

export const getTimeLeft = (time: number):string => {
  const hours = Math.floor((time / SECONDS_IN_MINUTE) / MINUTES_IN_HOUR);
  const minutes = Math.floor((time / SECONDS_IN_MINUTE) % MINUTES_IN_HOUR);
  const seconds = time % SECONDS_IN_MINUTE;

  return hours ?
    `-${hours < 10 ? `0${hours}` : `${hours}`}:${minutes < 10 ? `0${minutes}` : `${minutes}`}:${seconds < 10 ? `0${seconds}` : `${seconds}`}` :
    `-${minutes < 10 ? `0${minutes}` : `${minutes}`}:${seconds < 10 ? `0${seconds}` : `${seconds}`}`;
};
