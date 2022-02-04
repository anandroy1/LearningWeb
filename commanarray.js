const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "THursday", "Friday", "Saturday"];
const weekly_weather =[70,72,68,65,74,74,73];

// Using "for loop"
for (let i=0; i<weekdays.length; i++) {
  let weekday = weekdays[i];
  let temp = weekly_weather[i];
  console.log("Thr temperature on", weekday, "was", temp );
}

//OR

console.log("The temperature on Sunday was:" , weekly_weather[0]);
console.log("The temperature on Monday was:" , weekly_weather[1]);
console.log("The temperature on Tuesday was:" , weekly_weather[2]);
console.log("The temperature on Wednesday was:" , weekly_weather[3]);
console.log("The temperature on Thursday was:" , weekly_weather[4]);
console.log("The temperature on Friday was:" , weekly_weather[5]);
console.log("The temperature on Saturday was:" , weekly_weather[6]);

// Agerage Weather report

let total_temp = 0;
for (let i=0; i<weekdays.length; i++) {
  let temp = weekly_weather[i];
  total_temp += temp;
}

let average = total_temp / weekly_weather.length;
console.log("The average temperature for this week was:", average);

// Highest & Lowest value in an Array

let largest =weekly_weather[0];
let smallest = weekly_weather[0];
for (let i=0; i<weekly_weather.length; i++) {
    let temp = weekly_weather[i];
    if (temp>largest){
        largest = temp;  
    }
    if (temp<smallest){
        smallest = temp;
    }
}
console.log("The highest temprature in this week was:", largest);
console.log("The lowest temprature in this week was:", smallest);