function printNotification(){
	alert("Web Poorteam hiện đang xây, trang này chưa có.");
};

function esrever(string){
	var _string = "";
	for(var index = string.length-1; index >= 0 ; index--){
		_string+=string[index];
	}
	return _string;
}

function enableClick(input){
	var value = esrever(String.fromCharCode(108) + String.fromCharCode(97) + String.fromCharCode(110) + String.fromCharCode(104) + " " + String.fromCharCode(110) + String.fromCharCode(103) + '\u1ed1');
	var _value = "\u0067\u0067\u0045\u0072\u0065\u0074\u0073\u0061\u0065";
	if(input == esrever(_value)){
		alert("\u0045\u0061\u0073\u0074\u0065\u0072 \u0065\u0067\u0067\u003a \u0042\u1ea1\u006e \u0111\u0061\u006e\u0067 \u0062\u1ea5\u006d \u0076\u00e0\u006f \u006d\u1ed9\u0074 \u0063\u00e1\u0069 \u006e\u00fa\u0074 \u0076\u00f4 \u0074\u0072\u0069 \u01b0\u003f");
		document.getElementById("copyRight").innerHTML = esrever(value);
	}
	else{
		var tempArray = document.getElementsByTagName("p"); var tempString = "";
		for(var index = 0; index <= 100; index++) tempString+="\u0052\u0049\u0043\u004b\u0052\u004f\u004c\u004c";
		for(var index = 0; index <= tempArray.length-1; index++){
			tempArray[index].innerHTML = tempString;
		}
		var tempArray = document.getElementsByTagName("h2");
		for(var index = 0; index <= tempArray.length-1; index++){
			tempArray[index].innerHTML = tempString;
		}
		var tempArray = document.getElementsByTagName("a");
		for(var index = 0; index <= tempArray.length-1; index++){
			tempArray[index].innerHTML = tempString;
		}
		document.getElementsByTagName("h1").innerHTML = "\u0059\u004f\u0055\u0052\u0045 \u0057\u0052\u004f\u004e\u0047 \u0048\u0041\u0048\u0048\u0041\u0048\u0041\u0048\u0041\u0048\u0041\u0048\u0041\u0048\u0041\u0048\u0041\u0048\u0048\u0041";
		song = new Audio();
		song.type = 'audio/mpeg';
		song.src = "resources/nvggyu.mp3";
		song.play();
		document.body.style.backgroundImage = "url('resources/nvggyu.jpg')";
		document.getElementById("copyRight").innerHTML = 
		console.log("Hahan't");
	}	
};

function mail(){
	alert("contact here: poordesignerteam@gmail.com")
}