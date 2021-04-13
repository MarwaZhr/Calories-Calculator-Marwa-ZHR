// var foods = {
// 	apple : {cal:95, serving :182 },
// 	banana : {cal:111,serving: 125},
// 	dates : {cal:20,serving: 7.1},
// 	'Fruit Salad' : {cal:125, serving:249},
// 	grapes : {cal:2,serving: 145},
// 	strawberries : {cal:49, serving:152},
// 	watermelon : {cal:86,serving:286},
// 	potato : {cal:164,serving:213},
// 	pumpkin : {cal:51,serving:196},
// 	pepper : {cal:20,serving:75},
// 	peas : {cal:79,serving:98},
// 	onion : {cal:34,serving:85},
// 	olives :{cal:2,serving:2.7},
// 	tomato : {cal:20,serving:111},
// 	pizza : {cal:600,serving:238},
// 	yogurt : {cal:138,serving:227},
// 	'hot chocolat' : {cal:237,serving:266},
// 	milk : {cal:149, serving:244 },
// 	cheddar : {cal:89, serving:22 },
// }

var menLeanFactor = {1:{min:10,max:14},0.95:{min:15,max:20},0.9:{min:21,max:28},0.85:{min:28,max:100}};
var womenLeanFactor = {1:{min:14,max:18},0.95:{min:19,max:28},0.9:{min:29,max:38},0.85:{min:39,max:100}};
var activities = {1.3:"Very Light", 1.55:"Light",1.65:"Moderate",1.80:"Heavy",2:"Very Heavy"}

function each(coll, f) {
  if (Array.isArray(coll)) {
    for (var i = 0; i < coll.length; i++) {
      f(coll[i], i);
    }
  } else {
    for (var key in coll) {
      f(coll[key], key);
    }
  }
}

// // function UserInformation() {
// 	var user = {};
// 		// user.name = undefined;
// 		// user.passeWord = undefined;
// 		user.myActivity = undefined;
// 		user.myLeanFactor = undefined;
// 		user.myIdealCalories = undefined;
// 		user.myBodyFat = undefined;
// 		user.myBMI = undefined;
// 		user.age = age;
// 		user.gender = gender;
// 		user.weight = weight*2.20462;
// 		user.height = height*0.393701;
// 		user.status = status;
// 		user.bmi = bmi;
// 		user.bodyFat = bodyFat;
// 		user.leanFactor = leanFactor;
// 		user.activity = activity;
// 		user.idealCalories = idealCalories;
// // 	return user;
// // }
var height = document.getElementById("height").value;
var weight = document.getElementById('Weight').value;
var gender = document.getElementById("yourGender").value;
var age = document.getElementById("age").value;
function getValue (){
 height = document.getElementById("height").value;
 weight = document.getElementById('Weight').value;
 gender = document.getElementById("yourGender").value;
 age = document.getElementById("age").value;
}
  
function myalert (gender){
	if(gender.toLowerCase()!=="male" || gender.toLowerCase()!=="female"){
		alert("Are you an Alien ?")
	}
}

var myActivity =function (){
	 var act =0;
	 var activity = document.getElementById("activ").value;
	 each(activities, function(element,key){
	 	if(activity === element){
	 		 act = +key;
	 		
	 	}
	 })
	 return act;
}

function bmi (){
	var myBMI = ((weight*2.20462)/((height*0.393701)**2))*703;
	return myBMI;
}


function bodyFat(){
	if(gender.toLowerCase() === "female"){
	var myBodyFat = Math.floor((1.2*bmi())+(0.23*age)-5.4);
	}
	else if(gender.toLowerCase() === "male"){
		var myBodyFat = Math.floor((1.2*bmi())+(0.23*age)-16.2);
	}
	return myBodyFat;
}

function between (bodyFat,min,max){

	if (bodyFat>=min && bodyFat<=max){
		return true;
	}
	else {return false;}
}
function leanFactor(){
	var myLeanFactor =0;
	if(gender.toLowerCase() === "female"){
		each(womenLeanFactor, function(element,key){
			if(between(bodyFat(),element['min'],element['max'])){
				 myLeanFactor = +key;
			}
		})
	}
	else if(gender.toLowerCase() === "male")
	{
		each(menLeanFactor, function(element,key){
			if(between(bodyFat(),element['min'],element['max'])){
				 myLeanFactor = +key;
			}
		})
	}
	return myLeanFactor;
	}
function message (){
	alert ('Enter a valid input !')
}
function message1 (){
	alert("Age should be between 19 and 80")
}
function idealCalories(){
	var myIdealCalories =0;
	if(weight<40 ||weight>620 || height<35 || height>300 ){
		message();
	}
	else if(age<19 || age >80){
		message1()
	}
	else if(gender.toLowerCase() === "female"){
		 myIdealCalories = Math.floor(weight*0.9*24*leanFactor()*myActivity());
		 document.getElementById('calResult').innerHTML = "To maintain your weight, your apport of calories per day should be " + myIdealCalories;
	}

	else if(gender.toLowerCase() === "male")
	{
		 myIdealCalories = Math.floor(weight*1*24*leanFactor()*myActivity());
		 document.getElementById('calResult').innerHTML = "To maintain your weight, your apport of calories per day should be " + myIdealCalories;
	}
	else{
	 myalert(gender)
	}
	
}

