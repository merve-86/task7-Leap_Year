let year = Number(prompt('Enter a year:  '))
let result
if (year % 4 == 0 && year %100 !=0) {
    result = 'Leap Year'
    alert(result)
} else if ((year % 100 == 0) && (year % 400 == 0)) {
    result = "Leap Year"
} else if ((year % 100 == 0) && (year % 400 != 0)) {
    result = "It is a not leap Year"
} else {
    result = "It is a not leap Year";
}
alert(result)