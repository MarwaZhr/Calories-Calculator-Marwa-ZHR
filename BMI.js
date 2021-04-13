
var bmiInterpretation = {Underweight:{min:0,max:18.4},Normal:{min:18.5,max:24.9},Overweight:{min:25,max:29.9},Obese:{min:30, max:100}}
var height = document.getElementById("height1").value;
var weight = document.getElementById('Weight1').value;
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
function getValue1 (){
 height = document.getElementById("height1").value;
 weight = document.getElementById('Weight1').value;
}
function bmi1 (){
	var myBMI;
	 myBMI = (((weight*2.20462)/((height*0.393701)**2))*703).toFixed(2);
    document.getElementById('message1').innerHTML = "Your BMI is " + myBMI;	
	 return myBMI
}

function between1 (bmi,min,max){
	if (bmi>=min && bmi<=max){
		return true;
	}
	else {return false;}
}

function resultInterp (){
	debugger
	var result =0;
	each(bmiInterpretation,function(element,i){
		if(between1(bmi1(),element['min'],element['max'])){
			result = i;
		}
	})
    document.getElementById('message2').innerHTML = "According to your BMI your weight is in " + result+ " category for adults of your height."

}