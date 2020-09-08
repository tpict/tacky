/** @jsx jsx */
import React from "react";
import ReactDOM from "react-dom";
import { jsx } from "@emotion/react";

import { tacky } from "../packages/tacky-css/lib/macro";

const Example: React.FC = () => {
  const test = 5;
  const display = "inline-block" as const;

  const styles = tacky(_ => [
    _.color(_.rgb(255, 0, 0)),
    _.fontSize(_.rem(test)),
    _.fontFamily("Helvetica"),
    _.marginTop(_.rem(5)),
    _.marginBottom(_.rem(5)),
    _.backgroundColor(_.rgb(0, 0, 128)),
    _.display(display),
    _.boxShadow(_.rem(2), _.rem(2), _.rem(2), _.rem(2), _.rgba(0, 0, 0, 0.5)),
    _.media(
      ["not", _.media.screen(_.media.minWidth(_.px(300)))],
      _.color(_.rgb(0, 255, 0))
    ),
  ]);

  return <div css={styles}>Hello world</div>;
};

ReactDOM.render(<Example />, document.getElementById("root"));
