const { JSDOM } = require("jsdom");

const register = require("@babel/register").default;

register({ extensions: [".ts", ".tsx", ".js", ".jsx"] });

const dom = new JSDOM('<div id="app" class="app"><div>', {
  url: "http://localhost",
});
global.window = dom.window;
global.document = dom.window.document;
global.window.location = dom.window.location;
global.FormData = dom.window.FormData;
require("jsdom-xhr-patch").apply(global.window);
