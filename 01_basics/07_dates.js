let date = new Date();
// console.log(date.toString());  ==> Wed May 07 2025 10:52:30 GMT+0530 (India Standard Time)
// console.log(date.toDateString()); ==> Wed May 07 2025
// console.log(date.toISOString()); ==> 2025-05-07T05:22:30.150Z
// console.log(date.toTimeString()); ==> 11:01:12 GMT+0530 (India Standard Time)
// console.log(date.toLocaleString()); ==> 5/7/2025, 10:59:11 AM
// console.log(date.toLocaleDateString()); ==> 5/7/2025
// console.log(date.toLocaleTimeString()); ==> 11:03:14 AM

// let mycreatedDate = new Date(2023, 1, 30)
// let mycreatedDate = new Date(2023, 0, 30, 5, 3)
let mycreatedDate = new Date("12/25/2024")
// console.log(mycreatedDate.toLocaleString());

let timeStamp = Date.now();
// console.log(timeStamp);
// console.log(mycreatedDate.getTime());

// console.log(Math.floor(Date.now() / 1000));

let newDate = new Date()
console.log(newDate.toLocaleString('default', {
    day: "2-digit"
}));



