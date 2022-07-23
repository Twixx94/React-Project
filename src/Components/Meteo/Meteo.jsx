// import React from 'react'
// import '../Views/Pages/Home.css'
// import { useState } from 'react'

// const apiMeteo =  {
//     key : '',
//     base :''
// }

// export const Meteo = () => {
//     const [weather, setWeather] = useState();


//     fetch(``)
//     .then(res => res.json())
//     .then(result => setWeather(result));
   
//     const dateBuilder = (d)=>{
//         let months = ["Janvier","Fevrier","Mars","Avril","Mai","Juin","Juillet","Aout","Septembre","Octobre","Novembre","Decembre"];
//         let days = ["Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi","Dimanche"];
    
//         let day = days[d.getDay()]; 
//         let date = d.getDate();
//         let month = months[d.getMonth()];
//         let year = d.getFullYear();

//         return `${day} ${date} ${month} ${year}`
// }

//     return (
//     <div className='link content-box box-3 meteo-app'>
//         <div>{dateBuilder(new Date())}</div> 
//     </div>
//   )
// }