let searchMovie = function() {
    debugger
    let element = document.getElementById('resultSection');
    element.innerHTML = '';
    let searchValue = document.getElementById('movieTitle').value;
    let request = new XMLHttpRequest();
    request.open("GET", `https://imdb-api.com/en/API/Search/k_h9b2yv4e/${searchValue}`);
    request.send();
    request.onload = () => {
        console.log(request);

        if (request.status === 200){
            console.log(JSON.parse(request.response));
            var results = JSON.parse(request.response).results;
            results.forEach(printResult);
        }
    };
 };

 function printResult(item) {
    debugger
    const htmlData = `
    <div class="searchResult">
    <a target="blank" href="#">
      <img src="${item.image}" alt="${item.title}" width="600" height="400">
    </a>
    <div class="desc">${item.title} - ${item.description}</div>
    </div>`;
    let element = document.getElementById('resultSection');
    element.insertAdjacentHTML('beforeend', htmlData);
  }

let searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener('click', searchMovie, false);