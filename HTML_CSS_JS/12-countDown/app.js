const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];


const giveway = document.querySelector(".giveway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");


let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate()


let futureDate = new Date(tempYear,tempMonth,tempDay+10,11,30,0);
//console.log(futureDate)

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

let month = futureDate.getMonth();
month = months[month]
const date = futureDate.getDate();
const weekday = weekdays[futureDate.getDay()]

giveway.textContent = `Giveway ends on ${weekday} ${date} ${month} ${year} ${hours}:${minutes} am`

//future time in ms 

const futureTime = futureDate.getTime()
console.log(futureTime)

function remainingTime(){
  const today = new Date().getTime();
  const t = futureTime - today
  
  // 1sec = 1000ms
  // 1min = 60 sec
  // 1hour = 60 min
  // 1 day = 24 hours


  const oneday = 24*60*60*1000; // 1 day how many milliseconds
  const onehour = 60*60*1000;// 1 hour how many milliseconds
  const onemin = 60*1000; // 1 min how many milliseconds
  const onesec = 1000;

  let days = t/oneday
  days = Math.floor(days); //exact days without remainings 
  
  let hours = (t%oneday)/onehour// we must divide remaining from days
  hours = Math.floor(hours)
  
  let minutes = ((t%oneday)%onehour)/onemin //result will be millisec thats wht we must find remaining from after dividing oneday and onehour
  minutes = Math.floor(minutes)
  
  let seconds = (((t%oneday)%onehour)%onemin)/onesec
  seconds = Math.floor(seconds)
  
const values = [days,hours,minutes,seconds];

function format(item){
  if(item<10){
    return (item = `0${item}`)
  }
  return item
}

items.forEach(function(item,index){
  item.innerHTML=format(values[index])
})

if(t<0){
  clearInterval(countDown);
  deadline.innerHTML = `<h4 class ="expired"> sorry this giveway has expired<h4/>`
}

}

let countDown = setInterval(remainingTime,1000)
remainingTime()