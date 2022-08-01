const fetchData = async () => {
    try {
      const url = await fetch("../pk_cities/pk.json");
      data = await url.json();
      displayData(data);
    } 
    catch (e) {
      console.log("something went wrong!", e);
      alert("something went wrong!", e)
    }
  };
fetchData();
var cityDetails = new Array;
const displayData = all_cities =>{
    document.getElementById("cities_length").innerHTML = all_cities.length
    for(var i = 0; i < all_cities.length; i++){
        cityDetails.push(all_cities[i])
        let option = document.createElement("option")
        option.innerHTML = all_cities[i].city
        document.getElementById("cities").appendChild(option)
    }
    for(var j = 0; j < cityDetails.length; j++){
        if(cityDetails[j].city === document.getElementById("cities").value){
            document.getElementById("population").innerHTML = cityDetails[j].population
            document.getElementById("selected_value").innerHTML = cityDetails[j].city
        }
    }
}
const selectedValue = () => {
    for(var j = 0; j < cityDetails.length; j++){
        if(cityDetails[j].city === document.getElementById("cities").value){
            document.getElementById("population").innerHTML = cityDetails[j].population
            document.getElementById("selected_value").innerHTML = cityDetails[j].city;
        }
    }
}
