import Snowflakes from "magic-snowflakes";
const snowflakes = new Snowflakes();

export const startSnowflakes = () => {
  return snowflakes.start();
};

export const stopSnowflakes = () => {
  return snowflakes.stop();
};

export const hideSnowflakes = () => {
  console.log(snowflakes.hide)
  return snowflakes.hide();
}

export const showSnowflakes = () => {
  return snowflakes.show();
}