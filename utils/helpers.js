export function formatDate(datetime) {
  const date = new Date(datetime)
  const [year, month, day] = [date.getFullYear(), date.getMonth() + 1, date.getDate()]
  return `${year}-${month}-${day}`
}
