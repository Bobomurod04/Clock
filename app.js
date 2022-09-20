
const showTime = () => {

  let clock, time, hour, minute, second;
  clock = document.getElementById('clock');
  time = new Date();
  hour = time.getHours();
  minute = time.getMinutes();
  second = time.getSeconds();
  
  if(hour >= 24) {
    hour = hour-24 + ' PM';
  } else {
    hour = hour + ' AM';
  }
  
  if(hour < 10) {
    hour = '0' + hour;
  }
  if(minute < 10) {
    minute = '0' + minute;
  }
  if(second < 10) {
    second = '0' + second;
  }

  clock.innerHTML = `${hour} : ${minute} : ${second}`;
  setTimeout(showTime, 1000);
}
showTime();