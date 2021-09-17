import { isSameDay, format } from 'date-fns';

export function getDateString(timestamp: number): string {
  const msTimestamp = timestamp * 1000;
  if (isSameDay(msTimestamp, new Date())) {
    return format(msTimestamp, 'HH:mm');
  }
  return format(msTimestamp, 'MMM dd');
}
