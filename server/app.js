const express = require(`express`);
const path = require(`path`);

const app = express();
const PORT = 3000;
const DIST_PATH = path.join(__dirname, `/../dist`);

app.use(function (req, res, next) {
  res.setHeader(
    "Content-Security-Policy",
    "default-src 'self' localhost https://ya-praktikum.tech wss://ya-praktikum.tech; script-src 'self' localhost 'unsafe-eval';font-src 'self' localhost https://fonts.googleapis.com https://fonts.gstatic.com;style-src 'self' localhost https://cdn.jsdelivr.net https://fonts.googleapis.com; img-src 'self' localhost https://via.placeholder.com https://ya-praktikum.tech;"
  );
  next();
});

app.use(express.static(DIST_PATH));

app.get("/*", (req, res) => {
  return res.sendFile(path.join(`${__dirname}/../dist/index.html`));
});

app.listen(process.env.PORT || PORT, () => {
  console.log(`Listening on port 3000...`);
});
