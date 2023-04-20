
fetch("https://corona.lmao.ninja/v2/countries/bangladesh")
 .then((response)=>{
    return response.json();
 })
 .then((data)=>{
    console.log(data);
    document.getElementById("newInfected").innerHTML=data.todayCases;
    document.getElementById("totalInfected").innerHTML=data.cases;
    document.getElementById("newRecovered").innerHTML=data.todayRecovered;
    document.getElementById("totalRecovered").innerHTML=data.recovered;
    document.getElementById("newDeath").innerHTML=data.todayDeaths;
    document.getElementById("totalDeath").innerHTML=data.deaths;

 })