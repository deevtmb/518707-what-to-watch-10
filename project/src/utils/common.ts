const MINUTES_IN_HOUR = 60;

export const getFormatedRuntime = (runtime: number): string => {
  const runtimeHours = Math.floor(runtime / MINUTES_IN_HOUR);
  const runtimeMinutes = runtime % MINUTES_IN_HOUR;

  if (runtimeHours) {
    return `${runtimeHours}h ${runtimeMinutes}m`;
  }

  return `${runtimeMinutes}m`;
};
