const express = require(`express`);
const path = require(`path`);

const app = express();
const PORT = 3000;
const DIST_PATH = path.join(__dirname, `/../dist`);

app.use(express.static(DIST_PATH));

app.get("/*", (req, res) => {
  return res.sendFile(path.join(`${__dirname}/../dist/index.html`));
});

app.listen(process.env.PORT || PORT, () => {
  console.log(`Listening on port 3000...`);
});
