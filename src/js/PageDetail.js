import 'bootstrap';

const PageDetail = (argument) => {
  const preparePage = () => {
    // cleanedArgument = argument.replace(/\s+/g, "-");
    console.log(argument);
    console.log("nous sommes ici")

    const fetchGame = (url, argument) => {
      let api = `?key=${process.env.API_KEY}`
      let finalURL = url + argument + api;

      fetch(`${finalURL}`)
        .then((response) => response.json())
        .then((response) => {
          let { name, released, description, background_image, developers, parent_platforms, publishers, genres, stores, background_image_additional, rating, ratings_count} = response;
          
          let articleDOM = document.querySelector(".page-detail .article");
  
          let dev = ""
          response.developers.forEach(element => {dev += element.name  
          });

          let consoles = ""
          response.parent_platforms.forEach(element => {consoles += element.platform.name + " "  
          });

          let publish = ""
          response.publishers.forEach(element => {publish += element.name + " "  ;
          console.log(publish)
          });
          
          let genre = ""
          response.genres.forEach(element => {genre += element.name + " "  ;
        });
        
          let tag = ""
          response.tags.forEach(element => {tag += element.name + " "  ;
          });

          response.stores.forEach(element => {articleDOM.querySelector("p.store").innerHTML += `<p> ${element.store.name} </p>` + " "  ;
          });

          let screenshot = ""
          // response.screenshot.forEach(element => {articleDOM.querySelector("screenshot").innerHTML += `<img src="${element.store.name}" </img>` + " "  ;
          console.log(background_image_additional)
          // });

          articleDOM.querySelector("h1.title").innerHTML = name;
          articleDOM.querySelector("p.release-date span").innerHTML = released;
          articleDOM.querySelector("p.description").innerHTML = description;
          articleDOM.querySelector(".myclass").src = background_image;
          articleDOM.querySelector("p.developer").innerHTML = dev;
          articleDOM.querySelector("p.consoles").innerHTML = consoles;
          articleDOM.querySelector("p.publisher").innerHTML = publish;
          articleDOM.querySelector("p.genre").innerHTML = genre;
          articleDOM.querySelector("p.tag").innerHTML = tag;
          articleDOM.querySelector(".screenshot").src = background_image_additional;
          articleDOM.querySelector("h5.rate").innerHTML = rating + "/5 - " + ratings_count + " votes" ;

          // articleDOM.querySelector("p.store").innerHTML += store;
        });
    };

    fetchGame("https://api.rawg.io/api/games/", argument);
  };

  const render = () => {
    pageContent.innerHTML = `
      
      <section class="page-detail my-3">
        <div class="article">
          <img class="myclass" src="src"></img>
          <div class="row mt-5">
            <div class="col-xl">
              <h1 class="title"></h1>
            </div>
            <div class="col d-flex justify-content-end">
              <h5 class="rate"></h5>
            </div>
          </div>
            <p class="description"></p>
            <div class="container">
              <div class="row">
                <div class="col">
                  <p> Release date </p>
                  <p class="release-date"><span></span></p>
                </div>
                <div class="col">
                  <p> Developer </p>
                  <p class="developer"><span></span></p>
                </div>
                <div class="col">
                  <p> Platforms </p>
                  <p class="consoles"><span></span></p>
                </div>
                <div class="col">
                  <p> Publiser </p>
                  <p class="publisher"><span></span></p>
                </div>
              </div>
            </div>
            <div class="container">
              <div class="row">
                <div class="col-md">
                  <p> Genre </p>
                  <p class="genre"> </p>
                  </div>
                  <div class="col-xl">
                  <p> Tags </p>
                  <p class="tag"> </p>
                  </div>
              </div>
             </div>
            <div class="container">
              <div class="row">
                <div class="col">
                  <h3> BUY </h3>
                  <p class="store"> </p>
                </div>
              </div>
            </div>
            <div class="container">
              <div class="row">
                <div class="col">
                  <h3> TRAILER </h3>
                </div>
              </div>
            </div>
            <div class="container">
              <div class="row">
                <div class="col">
                  <h3> SCREENSHOT </h3>
                </div>
              </div>
            </div>
            <div class="container">
              <div>
                <img class="screenshot" src=""></img>
              </div>
            </div>
            <div class="container">
              <div class="row">
                <div class="col">
                  <h3> YOUTUBE </h3>
                </div>
              </div>
            </div>
            <div class="container">
              <div class="row">
                <div class="col">
                  <h3> SIMILAR GAME </h3>
                </div>
              </div>
            </div>
        </div>
      </section>
      `;

    preparePage();
  };

  render();
};

export { PageDetail };