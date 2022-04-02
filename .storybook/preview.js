import { addParameters } from "@storybook/react";
import { addDecorator } from "@storybook/react";
import { withContexts } from "@storybook/addon-contexts/react";
import { contexts } from "./contexts";
import { withKnobs } from "@storybook/addon-knobs";

export const parameters = {
  backgrounds: {
    default: 'default',
    values:
   [
    { name: "Default theme", value: "#ffffff"},
    { name: "Dark theme", value: "#233e31" },
   ],
  },
};

addDecorator(withContexts(contexts));
addDecorator(withKnobs);