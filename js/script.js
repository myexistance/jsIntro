// writes into the html.
// document.write("JA");

// // outputs a pop up.
// // alert("Hello");

// // console.log("hello");

// // var word1="Hello";
// // var word2=" you";
// // var newWord=word1+word2;

// // document.write(newWord);
// alert ("hello");
// var a=50;
// var b=10;
// var c=a+b;
// document.getElementById("Values").innerHTML = "The value of a is " + a + "</br>" +
//  "The value of b is " + b + "</br>" + "a + b=" + c ;
	
// var answer = 40 < 50;
// document.getElementById("Values").innerHTML=answer;

// var result= (4 < 5) || (5 != 5);
// document.getElementById("Values").innerHTML=result;

// var age = 15;
// result = age > 17 ? "eligible" : "sorry, wait another two years to get a licence";

// document.getElementById("Values").innerHTML=result;

// if (age > 17) {
// 	document.write("eligible for driving");
// } else if (age==17) {
// 	document.write("Congrats!");
// } else {
// 	document.write("Bugger off");
// }

// var day =5;
// if (day==1) {
// 	document.write("<br><h1>Monday<h1>");
// }  else if (day==2) {
// 	document.write("<br><h1>Tuesday<h1>");
// }  else if (day==3) {
// 	document.write("<br><h1>Wednesday<h1>");
// }  else if (day==4) {
// 	document.write("<br><h1>Thursday<h1>");
// }  else if (day==5) {
// 	document.write("<br><h1>Friday<h1>");
// }  else if (day==6) {
// 	document.write("<br><h1>Sat<h1>");
// }  else if (day==7) {
// 	document.write("<br><h1>Sunday<h1>");
// }

// document.write("Grade Guide A - C or Pass and Fail");
// var grade="80 and 100";
// switch (grade) {
// 	case "80 and 100": document.write("</br>A");
// 	break;
// 	case "B": document.write("</br>Mark btwn 65 and 79");
// 	break;
// 	case "C": document.write("</br>Mark btwn 55 and 64");
// 	break;
// 	case "Pass": document.write("</br>Mark btwn 50 and 54");
// 	break;
// 	case "Fail": document.write("</br>Go Home");
// 	break;
// 	default: document.write("</br> Wrong Number")
// }


// var mark =50 ;
if ((mark >= 80 && mark<=100)){
	document.write("your grade is A");
} else if ((mark >= 65 && mark<=79)) {
	document.write("your grade is B");
} else if ((mark >= 55 && mark<=64)) {
	document.write("your grade is C");
} else if ((mark >= 0 && mark<=54)) {
	document.write("your grade is Fail");
}


