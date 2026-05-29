/* // Task 1

alert(new Date(2012, 1, 20, 3, 12));

// Task 2

let date = new Date(2012, 0, 3);
function getWeekDay(date) {
  let arr = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];
  return arr[date.getDay()];
}
alert(getWeekDay(date));

Task 3


let date = new Date(2012, 0, 3); // 3 Jan 2012
function getLocalDay(date) {
    let dateNum = 0;
  let arr = [
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
    'sunday',
  ];

  return arr[date.getDay()];
  if date.getDay() == 0 {
    return "sunday"
  }
}
alert(getLocalDay(date)); // tuesday, should show 2

Task 4


let date = new Date(2015, 0, 2);

function getDateAgo(date, days) {
  let dateClone = new Date(date);
  dateClone.setDate(date.getDate() - days);

  return dateClone.getDate();
}

alert(getDateAgo(date, 1)); // 1, (1 Jan 2015)
alert(getDateAgo(date, 2)); // 31, (31 Dec 2014)
alert(getDateAgo(date, 365)); // 2, (2 Jan 2014)

Task 5




function getLastDayOfMonth(year, month) {
  let date = new Date(year, month + 1, 0);
  return date.getDate();
}
console.log(getLastDayOfMonth(2012, 1));

Task 6


function getSecondsToday() {
  let date = new Date();
  return date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds;
}
alert(getSecondsToday());

Task 7


function getSecondsTomorrow() {
  let date = new Date();
  return Math.round(
    24 * 3600 -
      (date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds()),
  );
}
alert(getSecondsTomorrow());

Task 8
*/
function formatDate(date) {
  let diff = new Date() - date;
  if (diff < 1000) {
    return 'right now';
  }
  let sec = Math.floor(diff / 1000); // convert diff to seconds
  if (sec < 60) {
    return sec + ' sec. ago';
  }
  let min = Math.floor(diff / 60000); // convert diff to minutes
  if (min < 60) {
    return min + ' min. ago';
  }
  let d = date;
  d = [
    '0' + d.getDate(),
    '0' + (d.getMonth() + 1),
    '' + d.getFullYear(),
    '0' + d.getHours(),
    '0' + d.getMinutes(),
  ].map(component => component.slice(-2));
  return d.slice(0, 3).join('.') + ' ' + d.slice(3).join(':');
}

alert(formatDate(new Date(new Date() - 1))); // "right now"

alert(formatDate(new Date(new Date() - 30 * 1000))); // "30 sec. ago"

alert(formatDate(new Date(new Date() - 5 * 60 * 1000))); // "5 min. ago"

// yesterday's date like 31.12.16 20:00
alert(formatDate(new Date(new Date() - 86400 * 1000)));
