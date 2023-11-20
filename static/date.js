// Criar uma data 

let d1 = new Date(2012, 1, 20, 3, 12);

alert(d1);

// Mostrar um dia da semana

// function getWeekDay(date) {
//   let days = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];

//   return days[date.getDay()];
// }

// let date = new Date(2014, 0, 3);

// alert( getWeekDay(date));

// Dia da semana europeu

function getLocalDay(date) {

  let day = date.getDay();

  if (day == 0) {
    day = 7;
  }

  return day
}

let date = new Date(2012, 0, 3);

alert(getLocalDay(date));

// Last day of month

function getLastDayOfMonth(year, month) {
    let date = new Date(year, month + 1, 0);
    return date.getDate();
  }

alert (getLastDayOfMonth(2023, 1));
