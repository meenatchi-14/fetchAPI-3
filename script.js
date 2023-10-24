console.log("testing");
const seat=document.querySelector(".container");
let api="https://api.seatgeek.com/2/events?aid=123";

    fetch(api,{
        method:"GET",   
    })
    .then((response) => response.json())
  .then((seatgeek) => {
    console.log(seatgeek.events);
    seatgeek.events.forEach((event) => {
       const geekObject = {
        created_at:event.created_at,
        announce_date:event.announce_date,
        image:event.performers[0].image, 
        title:event.title,
        url:event.url,
        venue_city:event.venue.city,
        venue_country:event.venue.country,
        visible_until_utc:event.visible_until_utc,


    
    };
    console.log(geekObject);
//     console.log(state.subdivisions.length);
//     console.log(countiesObject);
   seatCard(geekObject);
//    //subDivisions(state.subdivisions);
   
    });
   })
   .catch((err) => console.log("error : ", err));
   
  
function seatCard(event)
{
  const geek = document.createElement("div");
  geek.innerHTML =` 
  <p class="card-body">
  <span class="text">Name: </span><span class="name"> ${event.title} </span><br>
  <span class="text"> Announce_date: </span><span class="name"> ${event.announce_date} </span><br>
  <span class="text">visible-at dateTime: </span><span class="name">${event.visible_until_utc}</span>
  <span class="text" > </span><br>
  <span class="text">Address:<br>City: </span><span class="name">${event.venue_city}</span><br>
  
  <span class="text seat">Seat avaiable:  <a href="${event.url}" target="_blank">Seatgeek</a></span>
  </p>
  
`;
seat.append(geek);

//  mySubDiv(state.subdivisions)
}
