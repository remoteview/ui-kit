import { configure, setAddon, addDecorator } from '@storybook/react';
import JSXAddon from "storybook-addon-jsx";
import { withKnobs, select } from "@storybook/addon-knobs/react";
import { configureViewport } from '@storybook/addon-viewport';

addDecorator(withKnobs);
setAddon(JSXAddon);
setAddon(configureViewport);

// automatically import all files ending in *.stories.js
const req = require.context("../src", true, /.stories.tsx$/);
function loadStories() {
  require("./welcomeStory");
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
