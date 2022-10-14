// Switch Class Active between links
let navLinks = document.querySelectorAll(".links");
navLinks.forEach(function (ele) {
  ele.addEventListener("click", function (e) {
    navLinks.forEach(function(ele){
      ele.classList.remove("active");
    });
    e.target.classList.add("active");
  });
});

// https://abo-habeba.github.io/weather/
// https://github.com/abo-habeba/dev-folio
// https://api.github.com/users/abo-habeba/repos

async function getReposApi() {
  let response = await fetch(`https://api.github.com/users/abo-habeba/repos`);
  let Result = await response.json();
  disply(Result);
}
getReposApi();


let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let datDy = new Date();
let dy = days[datDy.getDay()];


let forecastBox = document.getElementById('forecast');
function disply(reposApi){
  let box = ``;
  console.log(reposApi);
  for (let i = 0; i < reposApi.length; i++) {
    box +=`
    <div class="col-md-6">
    <div class="box">
      <div class="ovarliy">
        <p class"numb" > ${i+1} </p>
        <h2>${reposApi[i].name}</h2>
        <div class="box-link">
          <a href="${reposApi[i].html_url}" target="_blank" >link Code</a>
          <a href="https://abo-habeba.github.io/${reposApi[i].name}" target="_blank" >link siet</a>
        </div>
      </div>
    </div>
  </div>
   `;
  }

  forecastBox.innerHTML = box;

}


