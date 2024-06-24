const apikey="348e58cf5251562160dceb57ab51c6f7";
const url="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=gorakhpur";

async function checkWeather(){
    try{
        const response= await fetch("https://api.openweathermap.org/data/2.5/weather?q=gorakhpur&appid=fea9ef0b39e7b578ec6ede3593d56274");
    const data=await response.json();
    console.log(data);
    }
    catch(error){
        console.log(error);
    }
    
}

checkWeather();