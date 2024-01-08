import ColorsDescription from "../colors-description/colors-description";

const colorKeys = [
  "primary-color",
  "primary-hover-color",
  "primary-selected-color",
  "primary-selected-hover-color",
  // Family Care Apps guidelines
  "secondary-color",
  "secondary-hover-color",
  "secondary-selected-color",
  "secondary-selected-hover-color",
  "positive-color",
  "positive-color-hover",
  "positive-color-selected",
  "positive-color-selected-hover",
  "negative-color",
  "negative-color-hover",
  "negative-color-selected",
  "negative-color-selected-hover",
  "warning-color",
  "warning-color-hover",
  "warning-color-selected",
  "warning-color-selected-hover",
  "traffic-light_green",
  "traffic-light_orange",
  "traffic-light_red",
  "private-color",
  "shareable-color",
  "inverted-color-background",
  "icon-color",
  "fixed-light-color",
  "fixed-dark-color"
];

export const SemanticColors = () => <ColorsDescription colorNames={colorKeys} />;
