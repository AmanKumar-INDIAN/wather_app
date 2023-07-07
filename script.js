let apikey="4e25a3d847471cb9b819ba2798230d6f"
let urll="https://api.openweathermap.org/data/2.5/weather?units=metric&q="
let input=document.getElementById("input")
let btnn=document.getElementById("butten")
async function fethwather(city){
    let p1=await fetch(urll+city+`&appid=${apikey}`)
    let responce= await p1.json()
    console.log(responce)
    if(p1.status==404){
        document.querySelector(".error").style.display="block"
        console.log("invalid name of city")
    }
    else{
        document.querySelector(".degc").innerHTML=responce.main.temp +"°C"
        document.querySelector(".city_name").innerHTML=responce.name
        document.querySelector(".hum").innerHTML=responce.main.humidity +"%"
        document.querySelector(".winh").innerHTML=`${responce.wind.speed} Km/h`
        let imgsrc=document.querySelector(".imgg")
        if (responce.weather[0].main=="Haze"){
            imgsrc.src="img/cloudd.png"
        }
        else if(responce.weather[0].main=="Clouds"){
         imgsrc.src="img/cloud.png"
        }
        else if(responce.weather[0].main=="Rain"){
         imgsrc.src="img/rain.png"
        }
        else if(responce.weather[0].main=="clear"){
         imgsrc.src="img/cloud_sun.jpg"
        }
        
        document.querySelector(".wather_card").style.display="block"
    }
 

}

btnn.addEventListener("click",()=>{
    fethwather(input.value)
})
