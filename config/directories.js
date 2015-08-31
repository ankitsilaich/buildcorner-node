var path = require("path")


var dir = {};

dir.BASE_DIR = path.resolve("./")

dir.PUBLIC_ASSETS = dir.BASE_DIR+"/public/"
dir.CONTROLLER_DIR = dir.BASE_DIR+"/controllers"
dir.MIDDLEWARE_DIR = dir.BASE_DIR+"/middlewares"
dir.HELPERS_DIR = dir.BASE_DIR+"/helpers"

module.exports = dir;
