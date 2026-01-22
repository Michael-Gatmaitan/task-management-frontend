export function formatDate(_date: string) {
  const date = new Date(_date);

const formattedDate = new Intl.DateTimeFormat('en-US', {
  year: 'numeric',
  month: 'short', // "Jan"
  day: 'numeric', // "20"
  timeZone: 'UTC' // Important for SSR consistency [8, 12]
}).format(date);

  return formattedDate;
}