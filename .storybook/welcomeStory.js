import React from "react";

import { storiesOf } from "@storybook/react";
import { wInfo } from "./utils";

storiesOf("Welcome", module).addWithJSX(
  "to RemoteView ui kit",
  wInfo(`
    ### Notes
    Hello world!:
    ### Usage
    ~~~js
    <div>This is an example component</div>
    ~~~
    ### To use this Storybook
    Explore the panels on the left.
  `)(() => <div>This is an example component</div>)
);
