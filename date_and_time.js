let myDate = new Date();
console.log("To string :", myDate.toString());
console.log("To ISO string :", myDate.toISOString());
console.log("To DATE string :", myDate.toDateString());
console.log("To JSONstring :", myDate.toJSON());
console.log("To LOCALE string :", myDate.toLocaleString());
console.log("To LOCALE DATE string :", myDate.toLocaleDateString());

// To compare time(for bookings or real time leaderbaord apps)
let myOwnDate = new Date("06-13-2025");
let currentDate = Date.now();

console.log(currentDate);
console.log(myOwnDate.getTime());

myDate.toLocaleString("default", {
  weekday: "long",
});
