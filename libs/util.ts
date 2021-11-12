import { parseISO } from 'date-fns'
import { format } from 'date-fns-tz'

export function time(utcDate) {
  const t = format(parseISO(utcDate), 'yyyy/MM/dd', {
    timeZone: 'Asia/Tokyo',
  })
  return t
}
