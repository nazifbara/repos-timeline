export function formatDate(datetime) {
  const date = new Date(datetime)
  const [year, month, day] = [
    date.getFullYear(),
    (date.getMonth() + 1).toString().padStart(2, 0),
    date.getDate().toString().padStart(2, 0),
  ]
  return `${year}-${month}-${day}`
}
