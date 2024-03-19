export const dateFormater = (string: Date) => {
  const date = new Date(string)

  const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'numeric', year: 'numeric' }

  return date.toLocaleDateString('ru-RU', options)
}
