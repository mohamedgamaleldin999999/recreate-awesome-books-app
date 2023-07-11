import DateTime from '../luxon-master/luxon-master/src/datetime.js'
export function updateTime () {
  const currentDate = DateTime.now().toLocaleString(DateTime.DATETIME_FULL)
  const timeElement = document.getElementById('date')
  timeElement.innerHTML = currentDate
}
