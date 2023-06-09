import { Head, asset } from "$fresh/runtime.ts";

export default function Home() {
  return (
    <>
      <Head>
        <title>Holdn</title>
        <link href={asset('/index.css')} rel="stylesheet" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🙌</text></svg>"></link>
      </Head>
      <section class="content-wrapper">
        <h1 class="text-upper">Holdn</h1>
        <p>Need a placeholder image, but don't want to use a random picture generator? Holdn is here for you</p>
        <a href="https://github.com/gingerchew/holdn">Github</a>
      </section>🙌
      <section>
        <ul className="directions">
          <li data-title="Dimensions">
            <div className="content-wrapper">
              <h2>To generate the image you need, add the dimensions to the end of the url.</h2>
              <p>E.g. <code>/200</code> will generate an image 200x200 in size. <code>/200x300</code> will generate an image 200x300 in size</p>
              <img src="https://gingerchew-holden.deno.dev/200x300" alt="" height="300" width="200"/>
            </div>
          </li>
        </ul>
      </section>
    </>
  );
}
