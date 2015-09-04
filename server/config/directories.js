var path = require("path");


var dir = {};

dir.BASE_DIR = path.resolve("./");

dir.PUBLIC_ASSETS = dir.BASE_DIR+"/public/";
dir.CONTROLLER_DIR = dir.BASE_DIR+"/server/controllers";
dir.MIDDLEWARE_DIR = dir.BASE_DIR+"/server/middlewares";
dir.HELPERS_DIR = dir.BASE_DIR+"/server/helpers";
dir.VIEWS_PATH = dir.BASE_DIR+"/views";

module.exports = dir;
