// dates
let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toLocaleDateString);

// let myCreatedDate = new Date(2023, 0, 23)
// console.log(myCreatedDate.toDateString());

let myCreatedDate = new Date("01-14-2024")
console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime( ));
// console.log(Date.now());


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());


newDate.toLocaleDateString('default', {
    weekday: "long",
})





