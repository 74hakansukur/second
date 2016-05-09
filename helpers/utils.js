const daysMap = {
  "0":"Vasárnap",
  "1":"Hétfő",
  "2":"Kedd",
  "3":"Szerda",
  "4":"Csütörtök",
  "5":"Péntek",
  "6":"Szombat"
};

const monthsMap = {
  "0":"Jan",
  "1":"Feb",
  "2":"Már",
  "3":"Ápr",
  "4":"Máj",
  "5":"Jún",
  "6":"Júl",
  "7":"Aug",
  "8":"Szept",
  "9":"Okt",
  "10":"Nov",
  "11":"Dec"
};

function convertTemp (kelvin) {
 //Celsius
  return Math.round((kelvin - 273.15)*10)/10
}

function getDate (unixTimestmap) {
  let date = new Date(unixTimestmap * 1000);
  let day = daysMap[date.getDay()]
  let month = monthsMap[date.getMonth()] + ' ' + date.getDate();
  return month + ', ' + day;
}

export default convertTemp
export default getDate
