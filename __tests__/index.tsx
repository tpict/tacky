/** @jsx jsx */
import React from "react";
import ReactDOM from "react-dom";
import { jsx } from "@emotion/react";

import { tacky } from "../src";

const Example: React.FC = () => {
  const styles = tacky(_ => [
    _.color(_.rgb(255, 0, 0)),
    _.fontSize(_.rem(5)),
    _.fontFamily("Helvetica"),
    _.marginTop(_.rem(5)),
    _.marginBottom(_.rem(5)),
    _.backgroundColor(_.rgb(0, 0, 128)),
    _.display("inline-block"),
    _.boxShadow(_.rem(2), _.rem(2), _.rem(2), _.rem(2), _.rgba(0, 0, 0, 0.5)),
  ]);

  return <div css={styles}>Hello world</div>;
};

ReactDOM.render(<Example />, document.getElementById("root"));
