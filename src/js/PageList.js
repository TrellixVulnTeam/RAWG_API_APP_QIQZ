const PageList = (argument = "") => {
  
  const preparePage = () => {
    let cleanedArgument = argument.replace(/\s+/g, "-");
    let games = "";
    let filter ="";

    const fetchList = (url, cleanedArgument) => {
      let finalURL = url
      if (argument) {
        finalURL = url + "&search=" + cleanedArgument;
      } else if (argument = "") {
        finalURL = url + "&dates=2022-01-01,2022-12-31";
        };

      fetch(`${finalURL}`)
        .then(console.log(finalURL))
        .then((response) => response.json())
        .then((response) => {


          response.results.forEach((article) => {
            let{id, background_image, name,} = response;
            
            let logo = ""
            article.parent_platforms.forEach((platform) => {
              // logo += `${platform.platform.name} `
              logo +=  `
              <img class="logoImg" src="src/images/logos/${platform.platform.slug}.svg">
              `
            })
            console.log(logo);
              
              games += `
              <div class="card m-3" style="width: 18rem;">
                <a href = "#pagedetail/${article.id}">
                <img href="#pagedetail/${article.id}" class="card-img-top" src="${article.background_image}" alt="Card image cap">
                </a>
                <div class="card-body">
                <h4 class="card-title">${article.name}</h4>
                </div>
                <div class="logos">
                    ${logo}
                </div>
              </div>
              `
            ;
        });

            
            document.querySelector(".page-list .games").innerHTML = games; 
          })   
    }
    
      
      fetchList(`https://api.rawg.io/api/games?key=${process.env.API_KEY}`, argument);
    };
    

  const render = () => {
    pageContent.innerHTML = `
      <section class="intro m-3">
        <div class="row">
          <div class="col">
            <h2 class="m-3">Welcome</h2>
            <p class="m-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
              molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
              numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
              optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
              obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
              nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
              tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
              quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos 
              sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
              recusandae alias error harum maxime adipisci amet laborum.</p>
          </div>
        </div>
        <div class="row">
          <div class="">
            <select class="filter"name="pets" id="pet-select">
              <option value=""><p>Platform : any</p></option>
              <option value="dog">Dog</option>
                <option value="cat">Cat</option>
                <option value="hamster">Hamster</option>
            </select>
          </di>
        </div>
      </div> 
      </section>
      <section class="page-list">
         <div class="games">...loading</div>
      </section>
      <section class="button">
          <button>Show more</button>
      </section>
      
    `;

    preparePage();
  };

  render();
};

export { PageList }

