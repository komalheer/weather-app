  function show(){
  var cityName=document.getElementById("city").value;
    var country=document.getElementById("country").value;
  // var countryName=document.getElementById("country").value;
  fetch("http://api.openweathermap.org/data/2.5/weather?q="+cityName
  +country+"&APPID=a2366d15959e28c1a633e68938780438")
  	.then((res) => res.json())
	.then((data) => {console.log(data)
	var des="Current description:"+data.weather[0].description;
	var temp="Current temp:"+data.main.temp;
	var cel=data.main.temp -273;
	var n= cel.toFixed(2);
	
	
	if(data.weather[0].description==="fog"){
	document.getElementById("des").innerHTML=`<img src="images/fog.png">`;
	} else if(data.weather[0].description==="haze"){
		document.getElementById("des").innerHTML=`<img src="images/haze.png">`;	
	}else if(data.weather[0].description==="light rain"||data.weather[0].description==="shower rain"||data.weather[0].description==="light intensity shower rain"){
		
document.getElementById("des").innerHTML=`<img src="images/rain.png">`;	
		
}else if(data.weather[0].description==="moderate rain"){
	document.getElementById("des").innerHTML=`<img src="images/rain.png">`;	}
	
else if(data.weather[0].description==="overcast clouds"||data.weather[0].description==="broken clouds"){
document.getElementById("des").innerHTML=`<img src="images/clouds.png">`;}

else if(data.weather[0].description==="clear sky"){
document.getElementById("des").innerHTML=`<img src="images/clearsky.png">`;}else{
	document.getElementById("des").innerHTML=des;
	}
	
	document.getElementById("temp").innerHTML="Current temp: "+ n+" C( In Celsius)";
	})
	.catch((e) => alert(`${e} There is some problem with your value`))
	
	
}

const btn = document.getElementById('click')
btn.addEventListener('click', (e) => {
	e.preventDefault()
	show()
})
