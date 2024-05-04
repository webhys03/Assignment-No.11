// Calculate your age based on the current year and your birth year.
// function calculateAge(birthYear) {
//     const currentYear = new Date().getFullYear();
//     const age = currentYear - birthYear;
//     return age;
// }

// const birthYear = parseInt(prompt("Enter your birth year:"));

// if (!isNaN(birthYear)) {
//     const age = calculateAge(birthYear);
//     if (age >= 0) {
//         console.log("You are " + age + " years old.");
//     } else {
//         console.log("Invalid birth year entered.");
//     }
// } else {
//     console.log("Invalid input. Please enter a valid year.");
// }
// Write a program that calculates the area of a rectangle using length and width variables.

// function calculateRectangleArea(length, width) {
//     return length * width;
// }

// const length = parseFloat(prompt("Enter the length of the rectangle:"));
// const width = parseFloat(prompt("Enter the width of the rectangle:"));

// if (!isNaN(length) && !isNaN(width)) {
//     if (length >= 0 && width >= 0) {
//         const area = calculateRectangleArea(length, width);
//         console.log("The area of the rectangle is: " + area);
//     } else {
//         console.log("Length and width must be positive numbers.");
//     }
// } else {
//     console.log("Invalid input. Please enter valid numbers for length and width.");
// }
// Write a program that calculates the area of a circle.

// function calculateCircleArea(radius) {
//     return Math.PI * radius * radius;
// }

// const radius = parseFloat(prompt("Enter the radius of the circle:"));

// if (!isNaN(radius) && radius >= 0) {
//     const area = calculateCircleArea(radius);
//     console.log("The area of the circle is: " + area.toFixed(2));
// } else {
//     console.log("Invalid input. Please enter a valid positive number for the radius.");
// }

// Create a program that converts a temperature from Fahrenheit to Celsius and vice versa using a variable.

// function fahrenheitToCelsius(fahrenheit) {
//     return (fahrenheit - 32) * 5 / 9;
// }

// function celsiusToFahrenheit(celsius) {
//     return (celsius * 9 / 5) + 32;
// }

// const temperature = parseFloat(prompt("Enter the temperature value:"));
// const unit = prompt("Enter the unit of the temperature (F for Fahrenheit, C for Celsius):").toUpperCase();

// if (!isNaN(temperature) && (unit === 'F' || unit === 'C')) {
//     let result;
//     if (unit === 'F') {
//         const celsius = fahrenheitToCelsius(temperature);
//         result = temperature + "°F is equal to " + celsius.toFixed(2) + "°C.";
//     } else {
//         const fahrenheit = celsiusToFahrenheit(temperature);
//         result = temperature + "°C is equal to " + fahrenheit.toFixed(2) + "°F.";
//     }
//     console.log(result);
// } else {
//     console.log("Invalid input. Please enter a valid temperature value and unit (F or C).");
// }

// Convert a given number of seconds into minutes and seconds using variables.

// function convertSecondsToMinutesAndSeconds(seconds) {
//     const minutes = Math.floor(seconds / 60);
//     const remainingSeconds = seconds % 60;
//     return [minutes, remainingSeconds];
// }

// const totalSeconds = parseInt(prompt("Enter the total number of seconds:"));

// if (!isNaN(totalSeconds) && totalSeconds >= 0) {
//     const [minutes, remainingSeconds] = convertSecondsToMinutesAndSeconds(totalSeconds);
//     console.log(totalSeconds + " seconds is equal to " + minutes + " minutes and " + remainingSeconds + " seconds.");
// } else {
//     console.log("Invalid input. Please enter a valid non-negative integer for the number of seconds.");
// }

// Write a program that calculates the percentage.

// function calculatePercentage(value, total) {
//     return (value / total) * 100;
// }

// const value = parseFloat(prompt("Enter the value:"));
// const total = parseFloat(prompt("Enter the total:"));

// if (!isNaN(value) && !isNaN(total) && total !== 0) {
//     const percentage = calculatePercentage(value, total);
//     console.log(value + " is " + percentage.toFixed(2) + "% of " + total + ".");
// } else {
//     console.log("Invalid input. Please enter valid numbers for the value and total (total should not be zero).");
// }

// Write a program that converts given number of days in to weeks and days such as 17 days = 2 weeks and 3 days.

// function convertDaysToWeeksAndDays(days) {
//     const weeks = Math.floor(days / 7);
//     const remainingDays = days % 7;
//     return [weeks, remainingDays];
// }

// const totalDays = parseInt(prompt("Enter the total number of days:"));

// if (!isNaN(totalDays) && totalDays >= 0) {
//     const [weeks, remainingDays] = convertDaysToWeeksAndDays(totalDays);
//     console.log(totalDays + " days is equal to " + weeks + " weeks and " + remainingDays + " days.");
// } else {
//     console.log("Invalid input. Please enter a valid non-negative integer for the number of days.");
// }

// - Q1:
// let a = 2;
// let b = ++a * 2; 
// // b?

// ANS

// let a = 2;
// let b = ++a * 2;

// // output
// b = 3 * 2
// b = 6

// - Q2
// let x = 5;
// let y = x-- + 2;
// // y?

// // ANS

// let x = 5;
// let y = x-- + 2;

// // Output
// y = 5 + 2
// y = 7

// - Q3 
// let x = 3;
// let y = ++x + x++ + ++x;
// // y?

// ++x is a pre-increment operator. It means that x is first incremented by 1, and then its new value is used in the expression. So, ++x in this line increments x to 4.
// x++ is a post-increment operator. It means that the current value of x (which is 4 after the previous operation) is used in the expression, and then x is incremented by 1. So, x++ in this line is equivalent to 4, and then x becomes 5.
// ++x again is a pre-increment operator. It means that x is first incremented by 1, and then its new value is used in the expression. So, ++x in this line increments x to 6.
// The expression ++x + x++ + ++x evaluates to 4 + 4 + 6, which equals 14.
// Therefore, the value of y is 14.
// So, y is equal to 14. After this operation, the value of x becomes 6.

// - Q4 
//  let m = 2;
// let n = ++m * m++ * --m;
// // n?


// we have the line let n = ++m * m++ * --m;.
// ++m is a pre-increment operator. It means that m is first incremented by 1, and then its new value is used in the expression. So, ++m in this line increments m to 3.
// m++ is a post-increment operator. It means that the current value of m (which is 3 after the previous operation) is used in the expression, and then m is incremented by 1. So, m++ in this line is equivalent to 3, and then m becomes 4.
// --m is a pre-decrement operator. It means that m is first decremented by 1, and then its new value is used in the expression. So, --m in this line decrements m to 3.
// The expression ++m * m++ * --m evaluates to 3 * 3 * 3, which equals 27.
// Therefore, the value of n is 27.
// So, n is equal to 27. After this operation, the value of m becomes 3.

// - Q5
// let a = 3;
// let b = 5;
// let result = ++a + b-- - a++ + --b;
// // result?

// Then, we have the line let result = ++a + b-- - a++ + --b;.
// ++a is a pre-increment operator. It means that a is first incremented by 1, and then its new value is used in the expression. So, ++a in this line increments a to 4.
// b-- is a post-decrement operator. It means that the current value of b (which is 5 before the operation) is used in the expression, and then b is decremented by 1. So, b-- in this line is equivalent to 5, and then b becomes 4.
// a++ is a post-increment operator. It means that the current value of a (which is 4 after the previous operation) is used in the expression, and then a is incremented by 1. So, a++ in this line is equivalent to 4, and then a becomes 5.
// --b is a pre-decrement operator. It means that b is first decremented by 1, and then its new value is used in the expression. So, --b in this line decrements b to 3.
// The expression ++a + b-- - a++ + --b evaluates to 4 + 5 - 4 + 3, which equals 8.
// Therefore, the value of result is 8.
// So, result is equal to 8. After this operation, the value of a becomes 5 and the value of b becomes 3.

// 

// - Q7
// let a = 5;
// let b = 3;
// let c = 2;
// let d = 7;

// let result = ++a * (b-- + c) / --d;

// // a?, b?, c?, d? ,result?

// we have the line let result = ++a * (b-- + c) / --d;.
// ++a is a pre-increment operator. It means that a is first incremented by 1, and then its new value is used in the expression. So, ++a in this line increments a to 6.
// b-- is a post-decrement operator. It means that the current value of b (which is 3 before the operation) is used in the expression, and then b is decremented by 1. So, b-- in this line is equivalent to 3, and then b becomes 2.
// --d is a pre-decrement operator. It means that d is first decremented by 1, and then its new value is used in the expression. So, --d in this line decrements d to 6.
// The expression (b-- + c) evaluates to 3 + 2, which equals 5.
// The expression ++a * (b-- + c) / --d evaluates to 6 * 5 / 6, which equals 5.
// Therefore, the value of result is 5.
// So, result is equal to 5. After this operation, the value of a becomes 6, the value of b becomes 2, the value of c remains 2, and the value of d becomes 6.

// Q8
// let m = 2;
// let n = 3;
// let o = 4;
// let result = m++ * (--n + m) / (o-- - n);
// // m?, o?, n?, result?

// we have the line let result = m++ * (--n + m) / (o-- - n);.
// m++ is a post-increment operator. It means that the current value of m (which is 2 before the operation) is used in the expression, and then m is incremented by 1. So, m++ in this line is equivalent to 2, and then m becomes 3.
// --n is a pre-decrement operator. It means that n is first decremented by 1, and then its new value is used in the expression. So, --n in this line decrements n to 2.
// (--n + m) evaluates to 2 + 3, which equals 5.
// o-- is a post-decrement operator. It means that the current value of o (which is 4 before the operation) is used in the expression, and then o is decremented by 1. So, o-- in this line is equivalent to 4, and then o becomes 3.
// The expression o-- - n evaluates to 4 - 2, which equals 2.
// The expression m++ * (--n + m) / (o-- - n) evaluates to 3 * 5 / 2, which equals 7.5.
// Therefore, the value of result is 7.5.
// So, result is equal to 7.5. After this operation, the value of m becomes 3, the value of n becomes 2, and the value of o becomes 3.

