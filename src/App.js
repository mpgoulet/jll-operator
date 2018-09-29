import "tachyons";
import "styling/semantic.less";

import React from "react";
import { Button, Icon } from "semantic-ui-react";

//bb
import Header from "./components/Header";
import Main from "./components/Main";

const App = () => (
  <div className="min-vh-100 w-100 flex flex-column items-center justify-center">
    <div>
      <Header />
      <Main />
    </div>

    {/* <div className="w-100 mw7"> */}
    {/* <h1 className="lh-title">
        <Icon name="home" /> jll-blackbox
      </h1> */}

    {/* <p className="lh-copy">bb Beta v1a</p>

      <h3>Management Console</h3> */}

    {/* <p className="lh-copy">
            ✔️ Direct module imports to reduce bundle size<br />
            ✔️ Hot module reloading<br />
            ✔️ SEO optimizations (incl. Open Graph, Twitter and Google)<br />
            ✔️ The beautiful Inter UI font<br />
            ✔️ Semantic UI React (duh!)<br />
            ✔️ Tachyons for easy layouting
        </p> */}

    {/* <p className="lh-copy">Select function</p>

      <Button primary>Connectors</Button>
      <Button>Datasets</Button>
      <Button>Chains</Button>
      <Button>Apps</Button>
      <Button>Workers</Button>
    </div> */}
  </div>
);

export default App;
