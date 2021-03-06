import { formattedDate } from "./lib";

interface Streak {
  currentCount: number;
  startDate: string;
  lastLoginDate: string;
}

export function streakCounter(_localStorage: Storage, date: Date): Streak {
  return {
    currentCount: 1,
    startDate: formattedDate(date),
    lastLoginDate: formattedDate(date),
  };
}
