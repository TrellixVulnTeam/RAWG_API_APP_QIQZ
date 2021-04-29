

import { PageList } from './PageList'

const Home = (argument = "") => {
PageList();

const render = () => {
  pageContent.innerHTML = `
    <section class="intro">
      <div class="row">
        <div class="col">
          <h2 class="">Welcome</h2>
          <p class="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
            numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
            optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
            obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
            nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
            tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
            quia. Quo neque error repudiandae fuga? </p>
        </div>
      </div>
    </section>
    <section class="page-list m-4">
        <div class="games">...loading</div>
    </section>
    <section class="button">
        <button>Show more</button>
    </section>

  `;

};

render();
};


export { Home }