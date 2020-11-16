//1. Write a JavaScript conditional statement to sort three numbers. Print the result.

let a = 100;
let b = 200;
let c = 300;

if (a > b && a > c) {
  if (b > c) {
    console.log(a + "," + b + "," + c);
  } 
  else {
    console.log(a + "," + c + "," + b);
  }
} 
else if (b > a && b > c) {
  if (a > c) {
    console.log(b + "," + a + "," + c);
  } 
  else {
    console.log(b + "," + c + "," + a);
  }
} 
else if (c > a && c > b) {
  if (a > b) {
    console.log(c + "," + a + "," + b);
  } 
  else {
    console.log(c + "," + b + "," + a);
  }
 
} 
else {
  console.log("none of the above");
}

//2. Write a JavaScript conditional statement to find the largest of five numbers. Print the result.

let m = 10;
let n = 20;
let x = 30;
let y = 40;
let z = 50;

if (m > n && m > x && m > y && m > z) {
  console.log(m);
} else if (n > m && n > x && n > y && n > z) {
  console.log(n);
} else if (x > m && x > n && x > y && x > z) {
  console.log(x);
} else if (y > m && y > n && y > x && y > z) {
  console.log(y);
} else {
  console.log(z);
}

//3. Compute the average marks of the following students. Then, use the average to determine the corresponding grade.

// Student_Name	  Marks
// David	          80
// Vinoth	          77
// Divya	          88
// Ishitha	        95
// Thomas	          68

// Range	Grade
// <60	    F
// <70	    D
// <80	    C
// <90	    B
// <100	    A

let David = 80;
let Vinoth = 77;
let Divya = 88;
let Ishitha = 95;
let Thomas = 68;

let averageMarks = (David + Vinoth + Divya + Ishitha + Thomas) / 5;

if (averageMarks < 60) {
  console.log(averageMarks + " Your grade - F ");
}
else if (averageMarks < 70) {
  console.log(averageMarks + " Your grade - D ");
} 
else if (averageMarks < 80) {
  console.log(averageMarks + " Your grade - C ");
} 
else if (averageMarks < 90) {
  console.log(averageMarks + " Your grade - B ");
} 
else {
  console.log(averageMarks + " Your grade - A ");
}

//4. For a given hour, print out the corresponding greeting (Good morning, Good afternoon, Good evening).

let hour = 3;

if (hour > 5 && hour < 12) {
    console.log("Good Morning");
}
else if(hour > 12 && hour < 18) {
    console.log("Good Afternoon");
}
else if (hour > 18 && hour < 24 || hour > 1 && hour < 5) {
    console.log("Good Evening");
}
else {
    console.log ("none of the above")
}

//5. For a given day, print out whether it is a day of the work week or weekend.

let day = "Monday";

if (day == "Monday" || day == "Tuesday" || day == "Wednesday" || day == "Thursday" || day == "Friday") {
    console.log("it's a day of the work week");
}
else if (day == "Saturday" || day == "Sunday") {
    console.log("it's weekend");
}
else {
    console.log("none of the above");
}

//6. For a given month, print out in which season it belongs.

let month = "January";

if (month == "December" || month == "January" || month == "February" || month == "March") {
    console.log("Winter");
}
else if (month == "April" || month == "May" || month == "June") {
    console.log("Spring");
}
else if (month == "July" || month == "August" || month == "September") {
    console.log("Summer"); 
}
else if (month == "October" || month == "November") {
    console.log("Fall");
}
else {
    console.log("none of the above");
}


