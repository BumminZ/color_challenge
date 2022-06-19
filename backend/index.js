const express = require("express");
const app = express();
const cors = require("cors");

app.use(
  cors({
    origin: "*",
  })
);

app.get("/colors", (req, res) => {
  const color_code = req.query.code;
  const rgb = hexToRgb(color_code);
  if (rgb === null) return res.status(400).send("Invalid color");
  const hsl = rgbTohsl(rgb.r, rgb.g, rgb.b);
  return res.json({ message: "Success!", data: { rgb, hsl } });
});

const hexToRgb = (hex) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
};

const rgbTohsl = (r, g, b) => {
  r /= 255;
  g /= 255;
  b /= 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = (max + min) / 2;
  let l = h;
  let s = h;
  if (max === min) {
    h = s = 0;
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break; // eslint-disable-line  no-fallthrough  no-case-declarations  no-tabs no-trailing-spaces  no-mixed-spaces no-multiple-empty-lines no-trailing-spaces  no-mixed-spaces no-multiple-empty-lines     no-trailing-spaces  no-mixed-spaces no-multiple-empty-lines
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }
  h = Math.round(h * 100);
  s = Math.round(s * 100);
  l = Math.round(l * 100);
  return { h, s, l };
};

app.listen(4000, () => {
  console.log("app is lifted on port 4000");
});
