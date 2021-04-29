

import { PageList } from './Pagelist'

const Home = (argument = "") => {
  PageList();

const render = () => {
  pageContent.innerHTML = `
    <section class="intro">
      <div class="row px-5">
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

  `;

  preparePage();
};

render();
};


export { Home }